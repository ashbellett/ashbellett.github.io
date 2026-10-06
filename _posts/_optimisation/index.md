---
layout: page
category: "optimisation"
title: "Optimisation"
---

{% assign collection = site.collections | where_exp: "item", "item.label == page.category" | first %}

<div class="home">
  <h1 class="page-heading">{{ collection.title }}</h1>
  <p class="post-list collapsible-description">{{ collection.description }}</p>
  {% include collection-list.html collection=collection %}
</div>
