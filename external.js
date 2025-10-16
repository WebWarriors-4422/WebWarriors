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

// Hank's Spatial Analysis
var distance = turf.distance(
  [-97.94184832292025, 29.89331410619119],
  [-97.97082322925434, 29.8977314507243],
  { units: 'miles' }
);

console.log("Distance: " + distance.toFixed(2) + " miles");

L.marker([29.89331410619119, -97.94184832292025]).addTo(map)
    .bindPopup("Don's Japanese Kitchen");

L.marker([29.8977314507243, -97.97082322925434]).addTo(map)
    .bindPopup("Dive Shop");
