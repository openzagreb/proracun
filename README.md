## Otvoreni proračun

*An **Open Spending** project*

This repository will contain the source code of **Otvoreni proračun**, a front-end to OpenSpending with a focus on budgets from different levels of the Croatian government.

Check out also [project page](http://codeforcroatia.org/projects/otvoreni_lokalni_prora-uni_rh).

### Building the site

**Otvoreni proračun** is a simple Flask application that will be frozen to static HTML documents. The rendered (and statically saved) site can be downloaded to Amazon S3 and served from there. The following dependencies are required to build the site:

* Python 2.x, virtualenv
* node.js with npm, and global installs of: uglify-js, less, bower

When you have Otvoreni proračun checked out, follow these steps:
```bash
bower install
virtualenv pyenv
source pyenv/bin/activate
pip install -r requirements.txt
python setup.py develop
```

You can then run the site like a normal Flask application:
```bash
python otvoreniproracun/manage.py runserver
```

Having verified that the application work, you can build a frozen version of all the contents in this database by running:
```bash
python otvoreniproracun/manage.py freeze
```

This will make a plain HTML version of the visualizations, ready to be deployed to S3 or another file hosting platform.

Source code is OffenerHaushalt 2.0
