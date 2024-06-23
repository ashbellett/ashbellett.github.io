---
layout: page
category: "optimisation"
---

{% assign collection = site.collections | where_exp: "item", "item.label == page.category" | first %}

<div class="home">
  <h1 class="page-heading">{{ collection.title }}</h1>
  <p class="post-list collapsible-description">{{ collection.description }}</p>
  <ul class="post-list collapsible-content">
  {% assign docs = collection.docs | where_exp: "item", "item.layout == 'post'" %}
  {%- for doc in docs -%}
    <li>
      <h3>
        <a class="post-link" href="{{ doc.url | relative_url }}">
        {{ doc.title | escape}}
        </a>
      </h3>
      {{ doc.description }}
    </li>
  {%- endfor -%}
  </ul>
</div>
