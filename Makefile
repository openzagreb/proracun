.PHONY: build

all: build upload

build:
	python otvoreniproracun/manage.py freeze

upload:
	#s3cmd sync --delete-removed --acl-public -M --add-header='Cache-Control: public, max-age=84600' --reduced-redundancy --exclude 'static/.webassets-cache/*'  build/* s3://beta.proracun.org/
	aws s3 sync --cache-control 84600 --acl public-read --exclude 'static/.webassets-cache/*' --delete build/ s3://proracun.org/
