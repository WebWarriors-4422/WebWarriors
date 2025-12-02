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
  [29.8838328, -97.9660008],
  [29.87440, -97.95551]
], { color: '#cc5500', weight: 4 }).addTo(map);

// Highway 123 line
var highway123Line = L.polyline([
  [29.8572018, -97.9394127],
  [29.8167233, -97.9432741],
  [29.86498, -97.93865]
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
    [29.88463, -97.94900],
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
    [29.9004806, -97.9838520],
    [29.90043, -97.98427]
], {
    color: '#cc5500',
    weight: 4
}).addTo(map);

//JavaScript code for road query
document.getElementById("regionSelect").addEventListener("click", function(event) {
  var region = event.target.value;

  var regions = {
    oldRanch: {
      center: [29.8920, -97.974],
      zoom: 15.25
    },
    riverRidge: {
      center: [29.9024941, -97.906],
      zoom: 17
    },
    highway123: {
      center: [29.842, -97.955],
      zoom: 14
    },
    bishop: {
      center: [29.879, -97.963],
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
      <h3>River Ridge Parkway - East Underpass</h3>
      <img src="Resources/RiverRidgeEastUnderpass.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>This section of River Ridge is lacking a side walk thats needed to allow people living in appartment complexs like the Oasis and the Grove to be abe to safely walk to the otherside of the interstate. Crosswalks should be inplimented aswell.</p>
    </div>
  `);
marker1.addTo(detailMarkers);

//river ridge marker 2 - Tree
var marker2 = L.marker([29.90406, -97.90338])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>River Ridge Parkway - Frontage</h3>
      <img src="Resources/RiverRidgeTree.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker2.addTo(detailMarkers);

//river ridge marker 3 - Hilton Inn
var marker3 = L.marker([29.90268, -97.90436])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>River Ridge Parkway - Hilton Inn</h3>
      <img src="Resources/RiverRidgeHilton.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker3.addTo(detailMarkers);

//river ridge marker 4 - Briarwood
var marker4 = L.marker([29.902450190514223, -97.90452303212359])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>River Ridge Parkway - Briarwood</h3>
      <img src="Resources/RiverRidgeBriarwood.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker4.addTo(detailMarkers);

//123 marker 1 - Rattler
var marker5 = L.marker([29.81653, -97.94341])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Rattler</h3>
      <img src="Resources/123Rattler.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker5.addTo(detailMarkers);

//123 marker 2 - Cottonwood
var marker6 = L.marker([29.82420, -97.94253])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Cottonwood</h3>
      <img src="Resources/123Cottonwood.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker6.addTo(detailMarkers);

//123 marker 3 - Old Bastrop Highway
var marker7 = L.marker([29.82908, -97.94213])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Old Bastrop</h3>
      <img src="Resources/123SOldBastropN.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <img src="Resources/123SOldBastropS.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker7.addTo(detailMarkers);

//123 marker 4 - Clovis
var marker8 = L.marker([29.83294, -97.94178])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Clovis</h3>
      <img src="Resources/123Clovis.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker8.addTo(detailMarkers);

//123 marker 5 - Creek
var marker9 = L.marker([29.83590, -97.94145])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Creek</h3>
      <img src="Resources/123Creek.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker9.addTo(detailMarkers);

//123 marker 6 - Atlas
var marker10 = L.marker([29.84382, -97.94063])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Atlas</h3>
      <img src="Resources/123Atlas.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker10.addTo(detailMarkers);

//123 marker 7 - Sunoco
var marker11 = L.marker([29.84511, -97.94055])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Sunoco</h3>
      <img src="Resources/123Sunoco.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker11.addTo(detailMarkers);

//123 marker 8 - Redwood
var marker12 = L.marker([29.84750, -97.94035])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Redwood</h3>
      <img src="Resources/123Redwood.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker12.addTo(detailMarkers);

//123 marker 9 - Wonder World Redwood
var marker13 = L.marker([29.84626, -97.94107])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Wonder World Redwood</h3>
      <img src="Resources/123WestRedwood.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker13.addTo(detailMarkers);

//123 marker 10 - Crawford
var marker14 = L.marker([29.85305, -97.93982])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Crawford</h3>
      <img src="Resources/123Crawford.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker14.addTo(detailMarkers);

//123 marker 11 - De Zavala
var marker15 = L.marker([29.85501, -97.93989])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - DeZavala</h3>
      <img src="Resources/123DeZavala.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker15.addTo(detailMarkers);

//123 marker 12 - Goodnight
var marker16 = L.marker([29.85691, -97.93935])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Goodnight</h3>
      <img src="Resources/123Goodnight.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker16.addTo(detailMarkers);

//123 marker 13 - Meat Market
var marker17 = L.marker([29.86498, -97.93865])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Highway 123 - Meat Market</h3>
      <img src="Resources/123MeatMarket.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker17.addTo(detailMarkers);

//Bishop marker 1 - Belvin
var marker18 = L.marker([29.87440, -97.95551])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Bishop St - Belvin</h3>
      <img src="Resources/BishopBelvin.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker18.addTo(detailMarkers);

//Bishop marker 2 - Prospect
var marker19 = L.marker([29.87689, -97.95833])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Bishop St - Prospect</h3>
      <img src="Resources/BishopProspect.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker19.addTo(detailMarkers);

//Bishop marker 3 - Progress
var marker20 = L.marker([29.87805, -97.95946])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Bishop St - Progress</h3>
      <img src="Resources/BishopProgress.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker20.addTo(detailMarkers);

//Bishop marker 4 - Marlton
var marker21 = L.marker([29.88094, -97.96272])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Bishop St - Marlton</h3>
      <img src="Resources/BishopMarlton.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker21.addTo(detailMarkers);

//Bishop marker 5 - Franklin
var marker22 = L.marker([29.88382, -97.96598])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Bishop St - Franklin</h3>
      <img src="Resources/BishopFranklin.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker22.addTo(detailMarkers);

//Ranch Road 12 marker 1 - La Cima
var marker23 = L.marker([29.90043, -97.98427])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - La Cima</h3>
      <img src="Resources/RRLaCima.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker23.addTo(detailMarkers);

//Ranch Road 12 marker 2 - RV Lot
var marker24 = L.marker([29.89920, -97.97832])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - RV Lot</h3>
      <img src="Resources/RRRVs.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker24.addTo(detailMarkers);

//Ranch Road 12 marker 3 - Country Estates
var marker25 = L.marker([29.89899, -97.97375])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Country Estates</h3>
      <img src="Resources/RRCountryEstates.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker25.addTo(detailMarkers);

//Ranch Road 12 marker 4 - Crestwood
var marker26 = L.marker([29.89798, -97.97047])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Crestwood</h3>
      <img src="Resources/RRCrestwood.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker26.addTo(detailMarkers);

//Ranch Road 12 marker 5 - Dive Shop
var marker27 = L.marker([29.89789, -97.97068])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Dive Shop</h3>
      <img src="Resources/RRDiveShop.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker27.addTo(detailMarkers);

//Ranch Road 12 marker 6 - Ringtail
var marker28 = L.marker([29.89729, -97.96881])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Ringtail</h3>
      <img src="Resources/RRRingtail.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker28.addTo(detailMarkers);

//Ranch Road 12 marker 7 - Baptist Church
var marker29 = L.marker([29.89711, -97.96843])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Baptist Church</h3>
      <img src="Resources/RRBaptistChurcht.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker29.addTo(detailMarkers);

//Ranch Road 12 marker 8 - The Edge
var marker30 = L.marker([29.89655, -97.96626])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - The Edge</h3>
      <img src="Resources/RRTheEdge.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker30.addTo(detailMarkers);

//Ranch Road 12 marker 9 - CVS
var marker31 = L.marker([29.89645, -97.96555])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - CVS</h3>
      <img src="Resources/RRCVS.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker31.addTo(detailMarkers);

//Ranch Road 12 marker 10 - The Retreat
var marker32 = L.marker([29.89471, -97.96045])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - The Retreat</h3>
      <img src="Resources/RRTheRetreat.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker32.addTo(detailMarkers);

//Ranch Road 12 marker 11 - Tree
var marker33 = L.marker([29.89392, -97.95938])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Tree</h3>
      <img src="Resources/RRTree.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker33.addTo(detailMarkers);

//Ranch Road 12 marker 12 - Stone House
var marker34 = L.marker([29.89344, -97.95898])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Stone House</h3>
      <img src="Resources/RRStoneHouse.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker34.addTo(detailMarkers);

//Ranch Road 12 marker 13 - Highcrest
var marker35 = L.marker([29.89306, -97.95841])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Highcrest</h3>
      <img src="Resources/RRHighcrest.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker35.addTo(detailMarkers);

//Ranch Road 12 marker 14 - Blind Hill Down
var marker36 = L.marker([29.89256, -97.95819])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Blind Hill Down</h3>
      <img src="Resources/RRBlindHillDown.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker36.addTo(detailMarkers);

//Ranch Road 12 marker 15 - Blind Hill Up
var marker37 = L.marker([29.89244, -97.95793])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Blind Hill Up</h3>
      <img src="Resources/RRBlindHillUp.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker37.addTo(detailMarkers);

//Ranch Road 12 marker 16 - Franklin
var marker38 = L.marker([29.89166, -97.95731])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Franklin</h3>
      <img src="Resources/RRFranklin.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker38.addTo(detailMarkers);

//Ranch Road 12 marker 17 - Alley
var marker39 = L.marker([29.89123, -97.95688])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Alley</h3>
      <img src="Resources/RRAlley.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker39.addTo(detailMarkers);

//Ranch Road 12 marker 18 - Wake The Dead
var marker40 = L.marker([29.89131, -97.95670])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Wake The Dead</h3>
      <img src="Resources/RRWakeTheDead.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker40.addTo(detailMarkers);

//Ranch Road 12 marker 19 - Chepo's
var marker41 = L.marker([29.89052, -97.95584])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Chepo's</h3>
      <img src="Resources/RRChepos.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker41.addTo(detailMarkers);

//Ranch Road 12 marker 20 - Holland
var marker42 = L.marker([29.89009, -97.95561])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Holland</h3>
      <img src="Resources/RRHolland.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker42.addTo(detailMarkers);

//Ranch Road 12 marker 21 - Dear Sign
var marker43 = L.marker([29.88920, -97.95490])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Dear Sign</h3>
      <img src="Resources/RRDearSign.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker43.addTo(detailMarkers);

//Ranch Road 12 marker 22 - Cemetery Crossing
var marker44 = L.marker([29.88780, -97.95423])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Cemetery Crossing</h3>
      <img src="Resources/RRCemetery.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <img src="Resources/RRCrossing.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker44.addTo(detailMarkers);

//Ranch Road 12 marker 23 - Blanco Hall
var marker45 = L.marker([29.88785, -97.95409])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Blanco Hall</h3>
      <img src="Resources/RRBlancoHall.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker45.addTo(detailMarkers);

//Ranch Road 12 marker 24 - Disc Golf
var marker46 = L.marker([29.88618, -97.95280])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Disc Golf</h3>
      <img src="Resources/RRDiscGolf.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker46.addTo(detailMarkers);

//Ranch Road 12 marker 25 - Smith House
var marker47 = L.marker([29.88577, -97.95209])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Smith House</h3>
      <img src="Resources/RRSmithHouse.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker47.addTo(detailMarkers);

//Ranch Road 12 marker 26 - Blanco
var marker48 = L.marker([29.88517, -97.95153])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Blanco</h3>
      <img src="Resources/RRBlanco.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker48.addTo(detailMarkers);

//Ranch Road 12 marker 27 - Coers
var marker49 = L.marker([29.89163, -97.95706])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Ranch Road 12 - Coers</h3>
      <img src="Resources/RRCoers.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker49.addTo(detailMarkers);

//Oscar Smith marker 1 - Blanco
var marker50 = L.marker([29.88513, -97.95135])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Oscar Smith - Blanco</h3>
      <img src="Resources/OscarSmithBlanco.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker50.addTo(detailMarkers);

//Oscar Smith marker 2 - Strahan House
var marker51 = L.marker([29.88526, -97.94966])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Oscar Smith - Strahan House</h3>
      <img src="Resources/OscarSmithStrahanHouse.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker51.addTo(detailMarkers);

//Moore marker 1 - Rogers
var marker52 = L.marker([29.88463, -97.94900])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Moore - Rogers</h3>
      <img src="Resources/MooreRogers.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker52.addTo(detailMarkers);

//Moore marker 2 - Moeller
var marker53 = L.marker([29.88503, -97.94925])
  .bindPopup(`
    <div style="width: 200px;">
      <h3>Moore - Moeller</h3>
      <img src="Resources/MooreMoeller.jpg" style="width: 100%; height: auto; margin: 10px 0;">
      <p>info info info.</p>
    </div>
  `);
marker53.addTo(detailMarkers);

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
    map.panTo(map.unproject(px), {animate: true, duration: 2.0});
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
