---
layout: page
title: JavaScript
permalink: /fe/js/
---

<div class="alert alert-warning" role="alert">
<ul class="">

		{% for node in site.fe %}
            {% if node.title != null %}
                {% if node.doc_cat contains 'User' %}
                    <li><a href="{{ node.url }}">{{ node.title }}</a></li>
                {% endif %}
            {% endif %}
        {% endfor %}

</ul>
</div>
