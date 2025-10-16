var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);

//Tori's unique spatial analysis//
var start = turf.point([-97.94576322327491, 29.884341192968666]);
var end = turf.point([-97.92890853609376, 29.894266669878704]);

var greatCircle = turf.greatCircle(start, end, {
  properties: { name: "Jo's Cafe to Meadows Center" },
});
L.geoJSON(greatCircle, {
    style: {
        color: 'black',
        weight: 1.5,
        opacity: 0.7
    }
}).addTo(map);
L.marker([29.884341192968666, -97.94576322327491]).addTo(map)
    .bindPopup("Jo's Cafe");

L.marker([29.894266669878704, -97.92890853609376]).addTo(map)
    .bindPopup("Meadows Center");
// Kyle's Spatial analysis//
  var polygon = turf.polygon([
      [
        [29.87711,-97.95769],
        [29.87678,-97.95730],
        [29.87768,-97.95620],
        [29.87937,-97.95791],
        [29.87894,-97.95848],
        [29.87779,-97.95727],
      ],
    ]);

    var area = turf.area(polygon);.addTo(map);
L.marker([29.87733, -97.94716]).addTo(map)
    .bindPopup("Wonder World Cave");

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
}).addTo(map);
