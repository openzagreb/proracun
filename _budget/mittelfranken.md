---
name: Bezirk Mittelfranken
slug: mittelfranken
tagline: "Haushalt des Bezirks Mittelfranken."
level: bezirk
state: BY
budget:
  source: David Krcek
  source_url: https://openspending.org/open_bzmfr/meta
  data_url: http://www.krcek.de/wp-content/uploads/2014/12/bzmfr1.csv

  dataset: open_bzmfr
  default: kameral

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2014
    - field: 'einnahmen_ausgaben'
      name: 'Ein/Aus'
      default: 'Ausgabe'

  hierarchies:
    kameral:
      name: Haushalt
      drilldowns:
        - einzelplan
        - unterabschnitt
        - haushaltstelle
---
