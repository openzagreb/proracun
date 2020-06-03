---
name: Bundeshaushalt
slug: bund
tagline: "Der Bundeshaushalt enthält Angaben zu den Ausgaben und Einnahmen der Bundesregierung."
level: bund
budget:
  source: Bundesministerium der Finanzen (Bundeshaushalt-Info)
  source_url: http://bundeshaushalt-info.de
  data_url: https://github.com/pudo/bundeshaushalt/tree/master/data
  external_url: http://bund.offenerhaushalt.de

  dataset: de-bund
  default: einzelplan

  filters:
    - field: 'jahr'
      name: 'Jahr'
      default: 2015
    - field: 'flow'
      name: 'Typ'
      default: 'ausgaben'

  hierarchies:
    einzelplan:
      name: Einzelpläne
      drilldowns:
        - einzelplan
        - kapitel
        - titel

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