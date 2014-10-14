from flask import render_template

from otvoreniproracun.core import app, sites, pages
from otvoreniproracun.util import JSONEncoder


@app.route('/<slug>/')
def site(slug, template='site.html'):
    site = sites.get(slug)
    site_json = JSONEncoder().encode(site)
    return render_template(template, site=site, site_json=site_json)


@app.route('/<slug>/embed/')
def embed_site(slug):
    return site(slug, template='embed.html')


@app.route('/page/<path:path>.html')
def page(path):
    page = pages.get_or_404(path)
    template = page.meta.get('template', 'page.html')
    return render_template(template, page=page,
                           framed=page.meta.get('framed', True))


@app.route('/')
def index():
    sites_json = JSONEncoder().encode(sites)
    state_sites = [s for s in sites if s.level == 'zupanija']
    local_sites = [s for s in sites if s.level not in ['zupanija', 'drzava']]
    return render_template('index.html', sites=sites, sites_json=sites_json,
                           state_sites=state_sites, local_sites=local_sites)
