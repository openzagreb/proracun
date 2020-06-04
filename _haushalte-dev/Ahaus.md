---
_id: e9db1030-0141-11e8-86e6-dd2a0f61d6b6
state: NW
name: Ahaus
text: >-
  Haushaltsentwurf der Stadt Ahaus.

  Der Haushaltsentwurf ist in der Ratssitzung am 13. Dezember 2017 eingebracht
  worden.


  Es sind nur ordentliche Erträge und ordentliche Aufwendungen dargestellt.

  Aufrufbar sind das Ergebnis 2016, die Ansätze für 2017 und 2018 sowie die
  Planungen für 2019, 2020 und 2021.


  Quelle für die Daten und weitere Informationen auf ahaus.de:

  https://www.ahaus.de/rathaus/zahlendatenstatistik/finanzen-steuern/haushaltsplaene.html

  (Haushaltspläne - Rathaus - Stadt Ahaus)


  Bürgerinfosystem der Stadt Ahaus:

  https://secure.ahaus.de/sessionnet/bi/to0040.php?__ksinr=646

  (Rat 13.12.2017)


  Extrahieren der Daten aus der Haushaltsdatei (PDF):

  https://thesing.net/2018/01/offener-haushalt
level: kommune
config: |-
{
"datapackage": "6f9de6393bf997134dc1afbb45096b76:01-2002-2010-ostvarenje-funkcijska-v2-bedenica",
"hierarchies": [
  {
    "datapackageHierarchy": "functional_classification",
    "url": "functional_classification",
    "label": "functional_classification"
  }
],
"value": [
  {
    "field": "iznos.sum",
    "formatOptions": {
      "symbol": "",
      "decimal": ",",
      "thousand": ".",
      "precision": 2,
      "format": "%s%v",
      "postfix": " kn",
      "grouping": 3
    },
    "label": "Betrag"
  }
],
"scale": [],
"filters": {
  "Godina": {
    "name": "godina.godina",
    "label_ref": "godina.godina",
    "ref": "godina",
    "default": true,
    "defaultValue": 2010,
    "defaultLabel": "All",
    "label": "Godina",
    "values": [
      {
        "value": "",
        "label": "All"
      },
      {
        "value": 2002,
        "label": 2002
      },
      {
        "value": 2003,
        "label": 2003
      },
      {
        "value": 2004,
        "label": 2004
      },
      {
        "value": 2005,
        "label": 2005
      },
      {
        "value": 2006,
        "label": 2006
      },
      {
        "value": 2007,
        "label": 2007
      },
      {
        "value": 2008,
        "label": 2008
      },
      {
        "value": 2009,
        "label": 2009
      },
      {
        "value": 2010,
        "label": 2010
      }
    ]
  }
},
"level": "kommune",
"state": "NW",
"name": "Ahaus",
"text": "Haushaltsentwurf der Stadt Ahaus. \nDer Haushaltsentwurf ist in der Ratssitzung am 13. Dezember 2017 eingebracht worden.\n\nEs sind nur ordentliche Erträge und ordentliche Aufwendungen dargestellt. \nAufrufbar sind das Ergebnis 2016, die Ansätze für 2017 und 2018 sowie die Planungen für 2019, 2020 und 2021.\n\nQuelle für die Daten und weitere Informationen auf ahaus.de:\nhttps://www.ahaus.de/rathaus/zahlendatenstatistik/finanzen-steuern/haushaltsplaene.html \n(Haushaltspläne - Rathaus - Stadt Ahaus)\n\nBürgerinfosystem der Stadt Ahaus: \nhttps://secure.ahaus.de/sessionnet/bi/to0040.php?__ksinr=646 \n(Rat 13.12.2017)\n\nExtrahieren der Daten aus der Haushaltsdatei (PDF):\nhttps://thesing.net/2018/01/offener-haushalt\n"
}
date: '2018-01-24T20:05:24.481Z'
slug: ahaus
---
 Haushaltsentwurf der Stadt Ahaus.

  Der Haushaltsentwurf ist in der Ratssitzung am 13. Dezember 2017 eingebracht
  worden. Es sind nur ordentliche Erträge und ordentliche Aufwendungen dargestellt.

  Aufrufbar sind das Ergebnis 2016, die Ansätze für 2017 und 2018 sowie die Planungen für 2019, 2020 und 2021.
  Quelle für die Daten und weitere Informationen auf [ahaus.de](https://www.ahaus.de/rathaus/zahlendatenstatistik/finanzen-steuern/haushaltsplaene.html)

  Zudem das [Bürgerinfosystem](https://secure.ahaus.de/sessionnet/bi/to0040.php?__ksinr=646) der Stadt Ahaus (Rat 13.12.2017).
  Und wie die Daten aus der Haushaltsdatei (PDF) extrahiert wurden auf [thesing.net](https://thesing.net/2018/01/offener-haushalt).
