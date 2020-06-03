---
name: Land Baden-Württemberg
slug: bawue
tagline: "Landeshaushalt Baden-Württemberg für das Jahr 2012 (Haushaltsplan 2012)."
level: land
state: BW
budget:
  source: Open Data / Service BW
  source_url: http://opendata.service-bw.de/Seiten/default.aspx
  data_url: http://opendata.service-bw.de/Seiten/offenedatendetail.aspx?mdid=90

  dataset: de-bw
  default: einzelplan

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2010
    - field: 'art'
      name: 'Art'
      default: 'Ausgabe'

  hierarchies:
    einzelplan:
      name: Einzelpläne
      drilldowns:
        - einzelplan
        - kapitel

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
