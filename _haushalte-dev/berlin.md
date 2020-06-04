---
_id: 9adc1c20-1e30-11e8-baa8-9788832e013f
state: BE
name: Berlin
text: Haushalt
level: land
config: |-
  {'colors': [
    '#CF3D1E', '#F15623', '#F68B1F', '#FFC60B', '#DFCE21',
    '#BCD631', '#95C93D', '#48B85C', '#00833D', '#00B48D',
    '#60C4B1', '#27C4F4', '#478DCB', '#3E67B1', '#4251A3',
    '#59449B', '#6E3F7C', '#6A246D', '#8A4873', '#EB0080',
    '#EF58A0', '#C05A89' ],
  'datapackage': '6f9de6393bf997134dc1afbb45096b76:01-2002-2010-ostvarenje-funkcijska-v2-bedenica',
  'datapackageURL': 'http://datastore.openspending.org/6f9de6393bf997134dc1afbb45096b76/01-2002-2010-ostvarenje-funkcijska-v2-bedenica/final/datapackage.json',
  'hierarchies': [
    {
      'datapackageHierarchy': 'functional_classification',
      'url': 'politikfelder',
      'label': 'Politikfelder'
    }
  ],
  'value': [
    {
      'field': 'betrag.sum',
      'formatOptions': {
        'symbol': '',
        'decimal': ',',
        'thousand': '.',
        'precision': '',
        'format': '%s%v',
        'postfix': ' €',
        'grouping': 3
      },
      'label': 'Betrag'
    }
  ],
    'Jahr': {
      'name': 'jahr.jahr',
      'label_ref': 'jahr.jahr',
      'ref': 'jahr',
      'type': 'integer',
      'default': true,
      'defaultValue': 2008,
      'defaultLabel': 'All',
      'label': 'Jahr',
      'values': [
        {
          'value': 2014,
          'label': 2014
        },
        {
          'value': 2015,
          'label': 2015
        },
        {
          'value': 2016,
          'label': 2016
        },
        {
          'value': 2017,
          'label': 2017
        },
        {
          'value': 2008,
          'label': 2008
        },
        {
          'value': 2002,
          'label': 2002
        }
      ]
    }
  },
  'level': 'land',
  'state': 'BE',
  'name': 'Berlin',
  'text': 'Haushalt',
  'hasBarChart': false,
  'date': 'jahr.jahr',
  'dateFilter': 'Jahr',
  }
date: '2018-03-02T15:44:34.274Z'
slug: be
---
