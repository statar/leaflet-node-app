"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leaflet_1 = require("leaflet");
var options = {
    center: (0, leaflet_1.latLng)(40.731253, -73.996139),
    zoom: 12,
};
var mymap = (0, leaflet_1.map)('map', options);
var key = "YOUR_MAPTILER_API_KEY_HERE";
(0, leaflet_1.tileLayer)("https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=".concat(key), {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
}).addTo(mymap);
//# sourceMappingURL=map.js.map