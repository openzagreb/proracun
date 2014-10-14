import logging

from flask import Flask
from flask.ext.assets import Environment
from flask_frozen import Freezer
from flask_flatpages import FlatPages


from otvoreniproracun import default_settings
from otvoreniproracun.sites import load_sites

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.config.from_object(default_settings)
app.config.from_envvar('OTVORENIPRORACUN_SETTINGS', silent=True)

assets = Environment(app)
freezer = Freezer(app)
sites = load_sites(app)
pages = FlatPages(app)
