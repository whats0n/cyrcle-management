export default class Map {
  constructor(config) {
    this._mapHTML = config.map.get(0);
    this._icon = './img/marker.png';
    this._center = {
      lat: 40.7127753,
      lng: -74.0059728,
    };
    this.modal = null,
    this.duration = 300;
    this._init();
  }
  _init() {
    this._createMap();
  }
  _createMap() {
    this._map = new google.maps.Map(this._mapHTML, {
      center: this._center,
      zoom: 16,
      disableDefaultUI: true,
      scrollwheel: false,
      zoomControl: true,
      zoomControl: false,
      backgroundColor: '#e9e9e9',
      styles: [
        {
          'featureType': 'all',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'saturation': 36
            },
            {
              'color': '#000000'
            },
            {
              'lightness': 40
            }
          ]
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'color': '#000000'
            },
            {
              'lightness': 16
            }
          ]
        },
        {
          'featureType': 'all',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 20
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 17
            },
            {
              'weight': 1.2
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 20
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 21
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 17
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 29
            },
            {
              'weight': 0.2
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 18
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 16
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 19
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#000000'
            },
            {
              'lightness': 17
            }
          ]
        }
      ]
    });
    var that = this;
    var marker = new google.maps.Marker({
      position: this._center,
      map: null,
      icon: {
        url: that._icon
      }
    });

    // To add the marker to the map, call setMap();
    marker.setMap(this._map);
  }
};

let map = $('.js-map');
if (map.length) {
  map.each(function() {
    new Map({
      map: $(this)
    });
  });
};
