var map = L.map('map').setView([29.8827297, -98.01], 12); //adjusted map view
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);

// GeoJSON showing San Marcos city boundary
fetch('City_Limits.geojson')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    L.geoJSON(data, {
      style: {
        color: '#000000',        // black border
        weight: 1.5,               // Border thickness
      }
    }).addTo(map);
    console.log('GeoJSON loaded successfully');
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });

// Added Five Mile buffer//
  //L.marker([29.8827297, -97.9407576]).addTo(map);
     var sanMarcosPoint = {
       "type": "Feature",
       "geometry": {
         "type": "Point",
         "coordinates": [-97.9407576, 29.8827297]
       }
     };
     var buffer = turf.buffer( sanMarcosPoint, 5, { units: 'miles' });
     L.geoJSON(buffer).addTo(map);

//Bishop St. line code//
var start = turf.point([-97.9582455, 29.8768540]);
var end = turf.point([-97.9660008, 29.8838328]);
var bishopLine = L.polyline([
    [29.8768540, -97.9582455],
    [29.8838328, -97.9660008]
], {
    color: 'Red',
    weight: 4
}).addTo(map);

//123 line Code //
var start = turf.point([-97.9394127, 29.8572018]);
var end = turf.point([-97.9432741, 29.8167233]);
var bishopLine = L.polyline([
    [29.8572018, -97.9394127],
    [29.8167233, -97.9432741]
], {
    color: 'purple',
    weight: 4
}).addTo(map);

//River Ridge line code
var start = turf.point([-97.9004739, 29.9038436]);
var end = turf.point([-97.9027857, 29.9049370]);
var bishopLine = L.polyline([
    [29.9038436, -97.9004739],
    [29.9049370, -97.9027857]
], {
    color: 'purple',
    weight: 4
}).addTo(map);

//Ih35 feeder line code
var start = turf.point([-97.9032869, 29.9041976]);
var end = turf.point([-97.9070054, 29.8995782]);
var bishopLine = L.polyline([
    [29.9041976, -97.9032869],
    [29.8995782, -97.9070054]
], {
    color: 'purple',
    weight: 4
}).addTo(map);

//JavaScript code for road query
document.getElementById("regionSelect").addEventListener("change", function(event) {
  var region = event.target.value;

  var regions = {
    oldRanch: {
      center: [29.8927, -97.9682],
      zoom: 15
    },
    riverRidge: {
      center: [29.9031, -97.9032],
      zoom: 15
    },
    highway123: {
      center: [29.8498, -97.9405],
      zoom: 15
    },
    bishop: {
      center: [29.8784, -97.9600],
      zoom: 15
    },
    all: {
      center: [29.8827297, -98.01],
      zoom: 12
    }
  };

  if (regions[region]) {
    map.flyTo(regions[region].center, regions[region].zoom, {
      duration: 2
    });
  }
});
/*Tori's unique spatial analysis
var start = turf.point([-97.94576322327491, 29.884341192968666]);
var end = turf.point([-97.92890853609376, 29.894266669878704]);

    var area = turf.area(polygon);.addTo(map);
L.marker([29.87733, -97.94716]).addTo(map)
    .bindPopup("Wonder World Cave");

L.marker([29.894266669878704, -97.92890853609376]).addTo(map)
    .bindPopup("Meadows Center");
// Kyle's Spatial analysis//
 var polygon = turf.polygon([
  [
    [-97.95769, 29.87711],
    [-97.95730, 29.87678],
    [-97.95620, 29.87768],
    [-97.95791, 29.87937],
    [-97.95848, 29.87894],
    [-97.95727, 29.87779],
    [-97.95769, 29.87711] // close polygon
  ]
]);

var area = turf.area(polygon); // area in square meters
console.log('Polygon Area:', area);

L.geoJSON(polygon, {
  style: {
    color: 'green',
    fillColor: '#90ee90',
    fillOpacity: 0.4,
    weight: 2
  }
}).addTo(map);

L.marker([29.87736, -97.95733]).addTo(map)
  .bindPopup("Wonder World Cave<br>Area: " + area.toFixed(2) + " m²");

// Hank's Spatial Analysis
L.marker([29.8977314507243, -97.97082322925434]).addTo(map)
    .bindPopup("Dive Shop");

var diveShopPoint = turf.point([-97.97082322925434, 29.8977314507243]);
var diveShopBuffer = turf.buffer(diveShopPoint, 100, { units: 'feet' });

// Log the buffer geometry to the browser console
console.log(JSON.stringify(diveShopBuffer));

L.geoJSON(diveShopBuffer, {
  style: {
    color: 'blue',
    fillColor: '#add8e6',
    fillOpacity: 0.4,
    weight: 2
  }
}).addTo(map);*/
