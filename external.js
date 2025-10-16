var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
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
// Kyle's Spacial analysis//
