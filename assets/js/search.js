// Search for the notes. Everywhere, the header's search button, / or Ctrl+K
// (⌘K on a Mac) opens a palette of results; on /notes/ they focus the field
// above the topics instead, which filters them as you type. Both search the
// index that _plugins/search.rb publishes: the topics, the notes, and the bold
// terms each note defines, which link straight to their definitions. The
// index is fetched on first use. Without this script the button and the
// field stay hidden.
(function () {
  var indexUrl = document.currentScript.dataset.index;

  // Greek letters are also searched by name, so "sigma" finds "σ-algebra"
  var greek = {
    α: "alpha", β: "beta", γ: "gamma", δ: "delta", ε: "epsilon", ζ: "zeta",
    η: "eta", θ: "theta", ι: "iota", κ: "kappa", λ: "lambda", μ: "mu",
    ν: "nu", ξ: "xi", ο: "omicron", π: "pi", ρ: "rho", σ: "sigma", ς: "sigma",
    τ: "tau", υ: "upsilon", φ: "phi", χ: "chi", ψ: "psi", ω: "omega"
  };

  // Words and numbers fold to lower case without accents, so "holder" finds
  // "Hölder", and apostrophes go, so "lhopital" finds "L’Hôpital’s rule".
  // Everything else separates words. map[i] is the index in the original text
  // of folded character i, to place highlights.
  function fold(text) {
    var folded = "";
    var map = [];
    for (var i = 0; i < text.length; i++) {
      var character = text[i].normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
      if (character === "'" || character === "’") {
        continue;
      }
      if (greek[character]) {
        character = greek[character];
      } else if (!/^[\p{L}\p{N}]+$/u.test(character)) {
        character = " ";
      }
      for (var j = 0; j < character.length; j++) {
        folded += character[j];
        map.push(i);
      }
    }
    return { text: folded, map: map, words: folded.replace(/ +/g, " ").trim() };
  }

  // Where each word of the query is in a folded text, or null for a word that
  // is not: preferably at the start of a word, otherwise inside one, but only
  // for three letters or more, as single letters are inside nearly
  // everything. Longer words are placed first and no two overlap, so "t test"
  // needs a "t" apart from the "test".
  function locate(folded, words) {
    var taken = [];
    var found = [];
    var longestFirst = words.map(function (word, position) {
      return position;
    }).sort(function (a, b) {
      return words[b].length - words[a].length;
    });

    function free(at, length) {
      return taken.every(function (range) {
        return at + length <= range[0] || range[1] <= at;
      });
    }

    longestFirst.forEach(function (position) {
      var word = words[position];
      var match = null;
      var at = -1;
      while ((at = folded.text.indexOf(word, at + 1)) !== -1) {
        if (!free(at, word.length)) {
          continue;
        }
        if (at === 0 || folded.text[at - 1] === " ") {
          match = { at: at, start: true };
          break;
        }
        if (!match && word.length >= 3) {
          match = { at: at, start: false };
        }
      }
      if (match) {
        taken.push([match.at, match.at + word.length]);
      }
      found[position] = match;
    });
    return found;
  }

  // The parts of the original text that the query's words matched
  function highlights(folded, words) {
    var ranges = [];
    locate(folded, words).forEach(function (match, position) {
      if (match) {
        ranges.push([folded.map[match.at], folded.map[match.at + words[position].length - 1] + 1]);
      }
    });
    return ranges;
  }

  // How well a result matches, or 0 for no match. Its name counts most: all
  // of it, then its start, then the query as a phrase within it, then every
  // word in it. Otherwise every word must start a word in its name or its
  // context (a note's description and topic, or a term's note), and a term
  // needs at least one in its name, or every term in a matching note would
  // match.
  function score(result, query) {
    var name = result.name;
    if (name.words === query.text) {
      return 100;
    }
    if (name.words.indexOf(query.text) === 0) {
      return 80;
    }
    if ((" " + name.words).indexOf(" " + query.text) !== -1) {
      return 70;
    }
    var found = locate(name, query.words);
    var starts = found.filter(function (match) {
      return match && match.start;
    }).length;
    if (found.every(Boolean)) {
      return starts === found.length ? 60 : 40;
    }
    var context = result.context ? locate(result.context, query.words) : [];
    for (var i = 0; i < found.length; i++) {
      if (!(found[i] && found[i].start) && !(context[i] && context[i].start)) {
        return 0;
      }
    }
    return starts || result.kind !== "term" ? 20 + starts : 0;
  }

  // Topics, then notes, then terms first among equal scores; then shorter
  // names, which are nearer to what was typed; then reading order
  var kindOrder = { topic: 0, note: 1, term: 2 };

  function search(results, query) {
    var matches = [];
    results.forEach(function (result) {
      var points = score(result, query);
      if (points) {
        matches.push({ result: result, points: points });
      }
    });
    matches.sort(function (a, b) {
      return b.points - a.points ||
        kindOrder[a.result.kind] - kindOrder[b.result.kind] ||
        a.result.title.length - b.result.title.length ||
        a.result.order - b.result.order;
    });
    return matches.map(function (match) {
      return match.result;
    });
  }

  function parseQuery(text) {
    var folded = fold(text).words;
    return { text: folded, words: folded ? folded.split(" ") : [] };
  }

  // The index, as a list of results in reading order, and the topics with
  // their notes and terms for the filter on /notes/
  var index = null;
  var loading = null;

  function build(topics) {
    var results = [];

    function add(result, context) {
      result.name = fold(result.title);
      result.context = context ? fold(context) : null;
      result.order = results.length;
      results.push(result);
      return result;
    }

    topics.forEach(function (topic) {
      topic.result = add({ kind: "topic", title: topic.title, url: topic.url, detail: topic.description }, topic.description);
      topic.notes.forEach(function (note) {
        note.result = add({ kind: "note", title: note.title, url: note.url, detail: topic.title + " · " + note.description },
          note.description + " " + topic.title);
        note.terms = note.terms.map(function (term) {
          return add({ kind: "term", title: term[0], url: note.url + "#" + term[1], detail: note.title + " · " + topic.title },
            note.title + " " + topic.title);
        });
      });
    });

    index = { topics: topics, results: results };
    return index;
  }

  function load() {
    if (!loading) {
      loading = fetch(indexUrl).then(function (response) {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      }).then(build);
      // Lets the next search try again
      loading.catch(function () {
        loading = null;
      });
    }
    return loading;
  }

  function plural(count, word) {
    return count.toLocaleString() + " " + word + (count === 1 ? "" : "s");
  }

  // Fills an element with text, the given ranges of it in <mark>
  function highlight(element, text, ranges) {
    element.textContent = "";
    ranges = ranges.slice().sort(function (a, b) {
      return a[0] - b[0];
    });
    var at = 0;
    ranges.forEach(function (range) {
      var start = Math.max(range[0], at);
      if (range[1] <= start) {
        return;
      }
      element.append(text.slice(at, start));
      var mark = document.createElement("mark");
      mark.textContent = text.slice(start, range[1]);
      element.append(mark);
      at = range[1];
    });
    element.append(text.slice(at));
  }

  var unavailable = "Search could not load. Check your connection and try again.";

  // The palette: a modal <dialog>, so the browser keeps focus inside it and
  // closes it with Escape. The input keeps focus while the arrow keys move
  // through the results.
  var dialog = document.getElementById("search");
  var input = dialog && dialog.querySelector(".search-input");
  var list = dialog && dialog.querySelector(".search-results");
  var status = dialog && dialog.querySelector(".search-status");
  var shown = [];
  var active = -1;

  // More would only be scrolled past; a narrower query finds the rest
  var maxResults = 30;

  function setActive(position, scroll) {
    if (active !== -1) {
      list.children[active].setAttribute("aria-selected", "false");
    }
    active = position;
    if (active === -1) {
      input.removeAttribute("aria-activedescendant");
      return;
    }
    var option = list.children[active];
    option.setAttribute("aria-selected", "true");
    input.setAttribute("aria-activedescendant", option.id);
    if (scroll) {
      option.scrollIntoView({ block: "nearest" });
    }
  }

  function renderPalette() {
    var query = parseQuery(input.value);
    shown = query.words.length ? search(index.results, query).slice(0, maxResults) : [];
    list.textContent = "";
    active = -1;
    shown.forEach(function (result, position) {
      var option = document.createElement("li");
      option.className = "search-result";
      option.id = "search-result-" + position;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");

      var link = document.createElement("a");
      link.href = result.url;
      link.tabIndex = -1;

      var title = document.createElement("span");
      title.className = "search-result-title";
      highlight(title, result.title, highlights(result.name, query.words));

      var detail = document.createElement("span");
      detail.className = "search-result-detail";
      detail.textContent = result.detail;

      link.append(title, detail);
      option.append(link);
      list.append(option);
    });
    input.setAttribute("aria-expanded", String(shown.length > 0));
    setActive(shown.length ? 0 : -1, true);

    if (!query.words.length) {
      status.textContent = "";
    } else if (!shown.length) {
      status.textContent = "Nothing matches “" + input.value.trim() + "”";
    } else {
      status.textContent = shown.length === maxResults ? "Top " + maxResults + " results" : plural(shown.length, "result");
    }
  }

  function updatePalette() {
    if (index) {
      renderPalette();
      return;
    }
    status.textContent = "Loading…";
    load().then(function () {
      if (dialog.open) {
        renderPalette();
      }
    }, function () {
      status.textContent = unavailable;
    });
  }

  function openPalette() {
    if (!dialog.open) {
      dialog.showModal();
      updatePalette();
    }
    input.focus();
    input.select();
  }

  if (dialog) {
    input.addEventListener("input", updatePalette);

    input.addEventListener("keydown", function (event) {
      if (event.isComposing) {
        return;
      }
      // A search input would clear itself first; closing keeps the query for
      // next time
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
        return;
      }
      if (!shown.length) {
        return;
      }
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        var step = event.key === "ArrowDown" ? 1 : -1;
        setActive((active + step + shown.length) % shown.length, true);
      } else if (event.key === "Enter" && active !== -1) {
        event.preventDefault();
        list.children[active].querySelector("a").click();
      }
    });

    // Follows the pointer, but only when it moves, so results scrolling
    // under a still pointer keep the keyboard's choice
    list.addEventListener("pointermove", function (event) {
      var option = event.target.closest(".search-result");
      if (option && option.id !== input.getAttribute("aria-activedescendant")) {
        setActive(Array.prototype.indexOf.call(list.children, option), false);
      }
    });

    // Closes before a result opens, which matters for a definition on this
    // same page, where the link only scrolls
    list.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        dialog.close();
      }
    });

    dialog.querySelector(".search-close").addEventListener("click", function () {
      dialog.close();
    });

    // A click on the dialog itself is on the backdrop around the panel
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    // Closes the palette as the page is left, so the page restored by the
    // Back button does not show it open
    window.addEventListener("pagehide", function () {
      dialog.close();
    });
  }

  // The filter on /notes/, which hides the notes that do not match, opens
  // the topics that have some, and lists each note's matching definitions
  var field = document.querySelector(".notes-search-input");
  var fieldStatus = document.getElementById("notes-search-status");
  var collections = Array.prototype.slice.call(document.querySelectorAll(".collection"));
  // Which topics were open before the search, to put back when it is cleared
  var openBefore = null;
  // A note lists this many matching definitions, then says how many more
  var maxTerms = 8;

  function noteItem(note) {
    var link = document.querySelector('.collection .post-link[href="' + CSS.escape(note.url) + '"]');
    return link && link.closest("li");
  }

  function termList(terms, query) {
    var paragraph = document.createElement("p");
    paragraph.className = "note-terms";
    terms.slice(0, maxTerms).forEach(function (term, position) {
      if (position) {
        paragraph.append(" · ");
      }
      var link = document.createElement("a");
      link.href = term.url;
      highlight(link, term.title, highlights(term.name, query.words));
      paragraph.append(link);
    });
    if (terms.length > maxTerms) {
      paragraph.append(" and " + (terms.length - maxTerms) + " more");
    }
    return paragraph;
  }

  function filter() {
    var query = parseQuery(field.value);
    var searching = query.words.length > 0;
    if (searching && !openBefore) {
      openBefore = collections.map(function (collection) {
        return collection.open;
      });
    }

    var results = 0;
    index.topics.forEach(function (topic) {
      // A topic shows all its notes only when its name matches; one matching
      // just its description, e.g. "functions", would bury the notes that do
      var topicMatches = searching && score(topic.result, query) >= 40;
      var collection = null;
      var anyShown = false;

      topic.notes.forEach(function (note) {
        var item = note.item || (note.item = noteItem(note));
        if (!item) {
          return;
        }
        collection = item.closest(".collection");
        var title = item.querySelector(".post-link");
        var description = item.querySelector(".note-description");
        var old = item.querySelector(".note-terms");
        if (old) {
          old.remove();
        }

        var matching = searching ? search(note.terms, query) : [];
        var noteMatches = searching && score(note.result, query) > 0;
        var show = !searching || topicMatches || noteMatches || matching.length > 0;
        item.hidden = !show;
        highlight(title, note.title, noteMatches ? highlights(note.result.name, query.words) : []);
        highlight(description, note.description, noteMatches ? highlights(fold(note.description), query.words) : []);
        if (matching.length) {
          item.append(termList(matching, query));
        }
        if (show) {
          anyShown = true;
          results += (searching ? 1 : 0) + matching.length;
        }
      });

      if (collection) {
        var heading = collection.querySelector(".post-list-heading");
        highlight(heading, topic.title, topicMatches ? highlights(topic.result.name, query.words) : []);
        collection.hidden = !anyShown;
        if (searching) {
          collection.open = anyShown;
        }
      }
    });

    if (!searching && openBefore) {
      collections.forEach(function (collection, position) {
        collection.open = openBefore[position];
      });
      openBefore = null;
    }

    if (!searching) {
      fieldStatus.textContent = "";
    } else if (!results) {
      fieldStatus.textContent = "Nothing matches “" + field.value.trim() + "”";
    } else {
      // The notes shown and the definitions listed under them
      fieldStatus.textContent = plural(results, "result");
    }

    // Keeps the search in the address, to share it or come back to it
    var url = new URL(location.href);
    if (searching) {
      url.searchParams.set("q", field.value);
    } else {
      url.searchParams.delete("q");
    }
    history.replaceState(history.state, "", url);
  }

  function updateFilter() {
    if (index) {
      filter();
      return;
    }
    load().then(filter, function () {
      fieldStatus.textContent = unavailable;
    });
  }

  if (field) {
    field.addEventListener("input", updateFilter);
    // Starts loading the index as soon as a search looks likely
    field.addEventListener("focus", load);
    field.addEventListener("pointerenter", load);

    // Enter opens the best match, as in the palette
    field.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" || event.isComposing || !index) {
        return;
      }
      var best = search(index.results, parseQuery(field.value))[0];
      if (best) {
        event.preventDefault();
        location.href = best.url;
      }
    });

    var initial = new URL(location.href).searchParams.get("q");
    if (initial) {
      field.value = initial;
      updateFilter();
    }
  }

  // On /notes/ the button and shortcuts go to the field there instead
  function openSearch() {
    if (field) {
      field.focus();
      field.select();
    } else if (dialog) {
      openPalette();
    }
  }

  var button = document.querySelector(".search-button");
  if (button) {
    button.addEventListener("click", openSearch);
    button.addEventListener("pointerenter", load);
    button.addEventListener("focus", load);
  }

  function typing(element) {
    return element.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(element.tagName);
  }

  // Shift is allowed with /, which needs it on some keyboards, but not with
  // K: Ctrl+Shift+K opens Firefox's console
  document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented || event.isComposing || event.altKey) {
      return;
    }
    var key = event.key || "";
    var modified = event.metaKey || event.ctrlKey;
    if ((modified && !event.shiftKey && key.toLowerCase() === "k") || (!modified && key === "/" && !typing(event.target))) {
      event.preventDefault();
      openSearch();
    }
  });
})();
