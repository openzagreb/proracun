---
name: Gemeinde Gauting
slug: gauting
tagline: "Haushalt der Gemeinde Gauting"
level: kommune
state: BY
coordinates:
  lat: 48.0676689
  lng: 11.3796987
budget:
  source: David Krcek
  source_url: https://openspending.org/open_gauting/meta
  data_url: http://www.krcek.de/wp-content/uploads/2015/01/gauting_2013.csv

  dataset: open_gauting
  default: kameral

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2014
    - field: 'einnahme_ausgabe'
      name: 'Ein/Aus'
      default: 'Ausgabe'
    - field: 'haushalt'
      name: 'Haushalt'
      default: 'a'

  hierarchies:
    kameral:
      name: Haushalt
      drilldowns:
        - einzelplan
        - unterabschnitt
        - haushaltstelle
---
