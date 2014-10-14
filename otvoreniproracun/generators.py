from otvoreniproracun.core import freezer, pages, sites


@freezer.register_generator
def page():
    for page in pages:
        yield {'path': page.path}


@freezer.register_generator
def site():
    for site in sites:
        yield {'slug': site.slug}


@freezer.register_generator
def embed_site():
    for site in sites:
        yield {'slug': site.slug}
