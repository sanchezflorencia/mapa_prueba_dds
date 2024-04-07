const map = L.map('map').setView([-34.61315, -58.37723], 13);

//esto es para elegir que mapa usar de source, si googlemaps o el que puse aca
//deje este porque estaba mas accesible pero si quieren cambienlo a googlemaps
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//crear y agregar un marcador o pin en el mapa
//var marker = L.marker([-34.61315, -58.37723]).addTo(map);

//crear un popUp, vinculado al pin
//marker.bindPopup("<b>Hola!</b><br>Soy un popup.").openPopup();

//crear eventos (como cuando el usuario haga click en alguna parte del mapa y te devuelve ubi)
function onMapClick(e) {
    alert("Hiciste click en el mapa, ubicacion: " + e.latlng);
}map.on('click', onMapClick);

// crear un icono custom
// los guarde en imagenes, se puede poner lo que quieran
const greenIcon = L.icon({
    iconUrl: "imagenes/nevera.png",
    iconSize: [50, 50], // tamaño del icono
    popupAnchor: [-1, -35] // punto donde aparece el popup en relacion al icono
});

//aca todo junto
const heladera = L.marker([-34.61315, -58.37723], {icon: greenIcon}).addTo(map);
heladera.bindPopup("<b>Hola!</b><br>Soy una heladera :)").openPopup();

