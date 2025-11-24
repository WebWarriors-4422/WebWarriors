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
        weight: 1,            // Border thickness
        fillOpacity: 0           // Make fill transparent
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
    color: '#cc5500',
    weight: 4
}).addTo(map);

//123 line Code //
var start = turf.point([-97.9394127, 29.8572018]);
var end = turf.point([-97.9432741, 29.8167233]);
var bishopLine = L.polyline([
    [29.8572018, -97.9394127],
    [29.8167233, -97.9432741]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);

//River Ridge line code
var start = turf.point([-97.9004739, 29.9038436]);
var end = turf.point([-97.9027857, 29.9049370]);
var bishopLine = L.polyline([
    [29.9038436, -97.9004739],
    [29.9049370, -97.9027857]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);

//Ih35 feeder line code
var start = turf.point([-97.9032869, 29.9041976]);
var end = turf.point([-97.9070054, 29.8995782]);
var bishopLine = L.polyline([
    [29.9041976, -97.9032869],
    [29.8995782, -97.9070054]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);

//Ranch road line #1 code
var start = turf.point([-97.9498207, 29.8852674]);
var end = turf.point([-97.9513770, 29.8852677]);
var bishopLine = L.polyline([
    [29.8852674, -97.9498207],
    [29.8852677, -97.9513770]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #2 code
var start = turf.point([-97.9513770, 29.8852677]);
var end = turf.point([-97.9534626, 29.8869012]);
var bishopLine = L.polyline([
    [29.8852677, -97.9513770],
    [29.8869012, -97.9534626]
], {
    color: '#cc5500',
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

//popup windows code
var detailMarkers = L.layerGroup();

//river ridge marker 1
var marker1 = L.marker([29.90456992620602, -97.90171161461943])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Location Name</h3>
      <img src="path/to/your/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker1.addTo(detailMarkers);

//river ridge marker 2
var marker2 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker2.addTo(detailMarkers);
//river ridge marker 3
var marker3 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker3.addTo(detailMarkers);
//river ridge marker 4
var marker4 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker4.addTo(detailMarkers);
//river ridge marker 5
var marker5= L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker5.addTo(detailMarkers);
//river ridge marker 6
var marker6 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker6.addTo(detailMarkers);

//123 marker 1
var marker7 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Location Name</h3>
      <img src="path/to/your/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker7.addTo(detailMarkers);
//123 marker 2
var marker8 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker8.addTo(detailMarkers);
//123 marker 3
var marker9 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker9.addTo(detailMarkers);
//123 marker 4
var marker10 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker10.addTo(detailMarkers);
//123 marker 5
var marker11 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker11.addTo(detailMarkers);
//123 marker 6
var marker12 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker12.addTo(detailMarkers);

//Bishop marker 1
var marker13 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Location Name</h3>
      <img src="path/to/your/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker13.addTo(detailMarkers);
//Bishop marker 2
var marker14 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker14.addTo(detailMarkers);
//Bishop marker 3
var marker15 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker15.addTo(detailMarkers);
//Bishop marker 4
var marker16 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker16.addTo(detailMarkers);
//Bishop marker 5
var marker17 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker17.addTo(detailMarkers);
//Bishop marker 6
var marker18 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker18.addTo(detailMarkers);

//Ranch marker 1
var marker19 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Location Name</h3>
      <img src="path/to/your/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker19.addTo(detailMarkers);
//Ranch marker 2
var marker20 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker20.addTo(detailMarkers);
//Ranch marker 3
var marker21 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker21.addTo(detailMarkers);
//Ranch marker 4
var marker22 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker22.addTo(detailMarkers);
//Ranch marker 5
var marker23 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker23.addTo(detailMarkers);
//Ranch marker 6
var marker24 = L.marker([coordinates])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="path/to/another/image.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker24.addTo(detailMarkers);


// Set minimum zoom level for markers to appear
var minZoomForMarkers = 14;

// Check zoom on map load
if (map.getZoom() >= minZoomForMarkers) {
  detailMarkers.addTo(map);
}

// Listen for zoom changes
map.on('zoomend', function() {
  var currentZoom = map.getZoom();

  if (currentZoom >= minZoomForMarkers) {
    if (!map.hasLayer(detailMarkers)) {
      detailMarkers.addTo(map);
    }
  } else {
    if (map.hasLayer(detailMarkers)) {
      map.removeLayer(detailMarkers);
    }
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
