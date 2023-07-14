const leaflet = require('leaflet');

async function initializeMap() {

  console.warn("HEYY ")
  if (typeof window === 'undefined')
    return;

  // const L = require('global.window.leaflet');
  // const L = await import("global.window.leaflet");


  const map = leaflet.map('map').setView([51.505, -0.09], 13);
  leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  }).addTo(map);

  const polygon = leaflet.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(map);

  map.on('click', (e: any) => console.log("You clicked the map at " + e.latlng));

}
initializeMap();