var map = L.map('map').setView([29.8884, -97.9384], 14);
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
        color: '#FF0000',        // Red border
        weight: 3,               // Border thickness
        opacity: 0.8,            // Border opacity
        fillColor: '#FF0000',    // Fill color
        fillOpacity: 0.1         // Fill transparency
      }
    }).addTo(map);
    console.log('GeoJSON loaded successfully');
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });

// Added Five Mile buffer//
  L.marker([29.8827297, -97.9407576]).addTo(map);
     var sanMarcosPoint = {
       "type": "Feature",
       "geometry": {
         "type": "Point",
         "coordinates": [-97.9407576, 29.8827297]
       }
     };
     var buffer = turf.buffer( sanMarcosPoint, 5, { units: 'miles' });
     L.geoJSON(buffer).addTo(map);

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
