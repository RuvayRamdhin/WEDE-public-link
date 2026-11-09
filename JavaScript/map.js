/*Leaflet is a JavaScript library for interactive maps on our website (Leaflet, 2023; OpenStreetMap contributors, 2024)*/

//Step 1: Creating the map centered over South Africa
var map = L.map('map').setView([-29.0000, 25.0000], 6);

//Step 2: Adding the OpenStreetMap tile layer background to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap Contributors',
}).addTo(map);

//Step 3: Add location markers for Sportsmans Warehouse branches across South Africa
var pmbMarker = L.marker([-29.5841, 30.3802]).addTo(map);
pmbMarker.bindPopup("<b>Sportsmans Warehouse - Pietermaritzburg</b><hr><br>Cascades Lifestyle Centre, McCarthy Drive");

var durbanMarker = L.marker([-29.8250, 31.0020]).addTo(map);
durbanMarker.bindPopup("<b>Sportsmans Warehouse - Durban North</b><hr><br>Springfield Value Centre, Electronic Drive");

var joburgMarker = L.marker([-26.1076, 28.0567]).addTo(map);
joburgMarker.bindPopup("<b>Sportsmans Warehouse - Johannesburg (Sandton)</b><hr><br>Sandton City Shopping Centre, Rivonia Rd");

var cptMarker = L.marker([-33.8742, 18.6275]).addTo(map);
cptMarker.bindPopup("<b>Sportsmans Warehouse - Cape Town (Tyger Valley)</b><hr><br>Tyger Valley Centre, Bill Bezuidenhout Ave");

//Step 4: Open default popup for the flagship store automatically
pmbMarker.openPopup();