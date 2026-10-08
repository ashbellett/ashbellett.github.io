# Notes moved from /:collection/:path to /notes/:collection/:path. Redirect the
# old URLs so existing links and search results keep working.
Jekyll::Hooks.register :site, :post_read do |site|
  site.collections.each_value do |collection|
    collection.docs.each do |doc|
      next unless doc.url.start_with?("/notes/")

      legacy_url = doc.url.delete_prefix("/notes")
      doc.data["redirect_from"] = Array(doc.data["redirect_from"]) << legacy_url
    end
  end
end
