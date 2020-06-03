---
name: Land Brandenburg
slug: brandenburg
tagline: "Landeshaushalt Brandenburg für das Jahr 2012 (Haushaltsplan 2012)."
level: land
state: BB
budget:
  source: Monty Muth
  _source_url: http://bundeshaushalt-info.de
  data_url: http://www.m0nty.de/wp-content/uploads/2012/03/export_utf8.csv

  dataset: de-brandenburg-land
  default: einzelplan

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2012
    - field: 'art'
      name: 'Art'
      default: false

  hierarchies:
    einzelplan:
      name: Einzelpläne
      drilldowns:
        - to
        - kapitel
        - from

    funktionen:
      name: Funktionen
      drilldowns:
        - hauptfunktion
        - oberfunktion
        - funktion

    gruppen:
      name: Gruppen
      drilldowns:
        - hauptgruppe
        - obergruppe
        - gruppe
---
