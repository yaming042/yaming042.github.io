---
layout: page
title: JavaScript
permalink: /fe/js/
---

<div class="alert alert-warning" role="alert">
<ul class="">
	{% for doc_cat in site.doc_cat[0] %}
		{% for node in site.fe %}
            {% if node.title != null %}
                {% if node.doc_cat contains doc_cat %}
                    <li><a href="{{ node.url }}">{{ node.title }}</a></li>
                {% endif %}
            {% endif %}
        {% endfor %}
	{% if forloop.last %}{% else %}<li class="nav-divider"></li>{% endif %}
	{% endfor %}
</ul>
</div>
