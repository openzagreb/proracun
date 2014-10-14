from setuptools import setup, find_packages

setup(
    name='otvoreniproracun',
    version='2.0',
    description="Vizualizacija lokalnih hrvatskih proracuna",
    long_description='',
    classifiers=[
        ],
    keywords='',
    author='Open Zagreb',
    author_email='info@proracun.org',
    url='http://www.proracun.org',
    license='MIT',
    packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
    namespace_packages=[],
    include_package_data=False,
    zip_safe=False,
    install_requires=[
    ],
    tests_require=[],
    entry_points=\
    """ """,
)
