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
     L.geoJSON(buffer, {
       style: {
         color: '#ffaa7f',
         weight: 2,
         fillOpacity: 0.15
       }
     }).addTo(map);


// Bishop St. line
var bishopLine = L.polyline([
  [29.8768540, -97.9582455],
  [29.8838328, -97.9660008]
], { color: '#cc5500', weight: 4 }).addTo(map);

// Highway 123 line
var highway123Line = L.polyline([
  [29.8572018, -97.9394127],
  [29.8167233, -97.9432741]
], { color: '#cc5500', weight: 4 }).addTo(map);

// River Ridge line
var riverRidgeLine = L.polyline([
  [29.9038436, -97.9004739],
  [29.9049370, -97.9027857]
], { color: '#cc5500', weight: 4 }).addTo(map);

// IH-35 Feeder line (if needed for future)
var ih35FeederLine = L.polyline([
  [29.9041976, -97.9032869],
  [29.8995782, -97.9070054]
], { color: '#cc5500', weight: 4 }).addTo(map);

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
//Ranch road line #3 code
var start = turf.point([-97.9534626, 29.8869012]);
var end = turf.point([-97.9543256, 29.8882448]);
var bishopLine = L.polyline([
    [29.8869012, -97.9534626],
    [29.8882448, -97.9543256]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #4 code
var start = turf.point([-97.9543256, 29.8882448]);
var end = turf.point([-97.9551311, 29.8898516]);
var bishopLine = L.polyline([
    [29.8882448, -97.9543256],
    [29.8898516, -97.9551311]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #5 code
var start = turf.point([-97.9551311, 29.8898516]);
var end = turf.point([-97.9586877, 29.8934704]);
var bishopLine = L.polyline([
    [29.8898516, -97.9551311],
    [29.8934704, -97.9586877]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #6 code
var start = turf.point([-97.9586877, 29.8934704]);
var end = turf.point([-97.9604295, 29.8949989]);
var bishopLine = L.polyline([
    [29.8934704, -97.9586877],
    [29.8949989, -97.9604295]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #7 code
var start = turf.point([-97.9604295, 29.8949989]);
var end = turf.point([-97.9642005, 29.8963289]);
var bishopLine = L.polyline([
    [29.8949989, -97.9604295],
    [29.8963289, -97.9642005]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #8 code
var start = turf.point([-97.9642005, 29.8963289]);
var end = turf.point([-97.9682708, 29.8970408]);
var bishopLine = L.polyline([
    [29.8963289, -97.9642005],
    [29.8970408, -97.9682708]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #9 code
var start = turf.point([-97.9682708, 29.8970408]);
var end = turf.point([-97.9726911, 29.8988995]);
var bishopLine = L.polyline([
    [29.8970408, -97.9682708],
    [29.8988995, -97.9726911]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #10 code
var start = turf.point([-97.9726911, 29.8988995]);
var end = turf.point([-97.9789161, 29.8992520]);
var bishopLine = L.polyline([
    [29.8988995, -97.9726911],
    [29.8992520, -97.9789161]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);
//Ranch road line #11 code
var start = turf.point([-97.9789161, 29.8992520]);
var end = turf.point([-97.9838520, 29.9004806]);
var bishopLine = L.polyline([
    [29.8992520, -97.9789161],
    [29.9004806, -97.9838520]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);

//JavaScript code for road query
document.getElementById("regionSelect").addEventListener("change", function(event) {
  var region = event.target.value;

  var regions = {
    oldRanch: {
      center: [29.8920, -97.975], //old center coordinates [29.8927, -97.9682],
      zoom: 15.25
    },
    riverRidge: {
      center: [29.9024941, -97.906],
      zoom: 17
    },
    highway123: {
      center: [29.837, -97.955],
      zoom: 14.45
    },
    bishop: {
      center: [29.8808391, -97.966],
      zoom: 16.5
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

//river ridge marker 1 - East Underpass
var marker1 = L.marker([29.90451, -97.90174])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Location Name</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQAswkpJsv0dSaEvp2sHuex1AQQujBfgfB-TaG9c4MW7M38?e=l5AGff.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker1.addTo(detailMarkers);

//river ridge marker 2 - Tree
var marker2 = L.marker([29.90406, -97.90338])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQAswkpJsv0dSaEvp2sHuex1AQQujBfgfB-TaG9c4MW7M38?e=l5AGff.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker2.addTo(detailMarkers);

//river ridge marker 3 - Hilton Inn
var marker3 = L.marker([29.90268, -97.90436])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQBqKIF7708rQ67Ijik2Pad6AbIAo7MIH8SoECjButgU9n0?e=QYqlr9.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker3.addTo(detailMarkers);

//river ridge marker 4 - Briarwood
var marker4 = L.marker([29.90261, -97.90439])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQD78LWFR8ZqQqd48kVrPNMTAaCQuWP8h2hL5oWYVJ2ReHw?e=dr03Gj.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker4.addTo(detailMarkers);

//123 marker 1 - Rattler
var marker7 = L.marker([29.81653, -97.94341])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Location Name</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQC1vyY9LcKTQalWbx1aiLOoAVTVQAAIBh7EkKx3AIF9_EE?e=5PuqfZ.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker7.addTo(detailMarkers);

//123 marker 2 - Cottonwood
var marker8 = L.marker([29.82420, -97.94253])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQCGhAZlGWkGSoB77VuUwB6DASNBDF2UC_UVgbiIF3ErAvY?e=hGnrfz.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker8.addTo(detailMarkers);

//123 marker 3 - Old Bastrop Highway
var marker9 = L.marker([29.82908, -97.94213])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQCGhAZlGWkGSoB77VuUwB6DASNBDF2UC_UVgbiIF3ErAvY?e=hGnrfz.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQAkQkMkAmGCQphzES5dH45jAXqWhxA-Df1UwQBvmTbIyuo?e=mA7Ple.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker9.addTo(detailMarkers);

//123 marker 4 - Clovis
var marker10 = L.marker([29.83294, -97.94178])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQD78LWFR8ZqQqd48kVrPNMTAaCQuWP8h2hL5oWYVJ2ReHw?e=dr03Gj.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker10.addTo(detailMarkers);

//123 marker 5 - Creek
var marker11 = L.marker([29.83590, -97.94145])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQC8NfHalxx3T4QmLPgzqmTKAUVMRqgffvIo_HdZAqc3L_8?e=L0XIZc.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker11.addTo(detailMarkers);

//123 marker 6 - Atlas
var marker12 = L.marker([29.84382, -97.94063])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Another Location</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQC8NfHalxx3T4QmLPgzqmTKAUVMRqgffvIo_HdZAqc3L_8?e=L0XIZc,jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker12.addTo(detailMarkers);

//123 marker 7 - Sunoco
var marker13 = L.marker([29.84511, -97.94055])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Location Name</h3>
      <img src="https://1drv.ms/i/c/a83f359f7f55dd13/IQAOQiRnAEEvSZBC7nutRbVIAVrO7MRsXkgpUD85wYpvfLk?e=Rlx0Rl.jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker13.addTo(detailMarkers);

//123 marker 8 - Redwood
var marker13 = L.marker([29.84750, -97.94035])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Location Name</h3>
      <img src=".jpeg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker13.addTo(detailMarkers);

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
marker24.addTo(detailMarkers);*/


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
// Center map on marker when popup opens
detailMarkers.eachLayer(function(layer) {
  layer.on('popupopen', function(e) {
    var px = map.project(e.popup._latlng);
    px.y -= e.popup._container.clientHeight/2;
    map.panTo(map.unproject(px), {animate: true});
  });
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
