---
_id: e9db1030-0141-11e8-86e6-dd2a0f61d6f6
state: "01"
name: Bedenica2
text:
level: kommune
config: |-
  {
  "datapackage": "6f9de6393bf997134dc1afbb45096b76:01-2002-2010-ostvarenje-funkcijska-v2-bedenica",
  "hierarchies": [
    {
      "datapackageHierarchy": "functional_classification",
      "url": "functional-classification",
      "label": "Funkcijska klasifikacija"
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
  "state": "01",
  "name": "Bedenica2",
  "text": "n/a"
  }
  {
    "datapackage": "6f9de6393bf997134dc1afbb45096b76:01_2002-2010_ostvaranje_proracuna-sve-v2.1-bedenica",
    "hierarchies": [
      {
        "datapackageHierarchy": "economic_classification",
        "url": "economic_classification",
        "label": "economic_classification"
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
        "label": "Iznos"
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      },
      {
        "label": "",
        "number": 1,
        "description": ""
      }
    ],
    "filters": {
      "Vrsta": {
        "name": "vrsta.vrsta",
        "label_ref": "vrsta.vrsta",
        "ref": "vrsta",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Vrsta",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "ostvarenje",
            "label": "ostvarenje"
          }
        ]
      },
      "Smjer": {
        "name": "smjer.smjer",
        "label_ref": "smjer.smjer",
        "ref": "smjer",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Smjer",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "prihod",
            "label": "prihod"
          },
          {
            "value": "rashod",
            "label": "rashod"
          }
        ]
      },
      "Godina": {
        "name": "godina.godina",
        "label_ref": "godina.godina",
        "ref": "godina",
        "default": true,
        "defaultValue": "",
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
    }
  }
date: '2020-06-04T00:00:00.000Z'
slug: bedenica2
---
