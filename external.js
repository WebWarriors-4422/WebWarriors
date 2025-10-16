var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);

    var polygon = turf.polygon([
      [
        [29.87711,-97.95769],
        [29.87678, -97.95730],
        [29.87768, -97.95620],
        [29.87937, -97.95791],
        [29.87894, -97.95848],
        [29.87779,-97.95727],
      ],
    ]);

    var area = turf.area(polygon);
    
