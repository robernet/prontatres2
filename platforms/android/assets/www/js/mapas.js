var showMaps = function() {

	var mapa1 = new GMaps({
		div: "#mapa1",
		lat: 19.03051,
		lng: -98.27785
	});
	var mapa2 = new GMaps({
		div: "#mapa2",
		lat: 20.99716,
		lng: -89.63080
	});
	var mapa3 = new GMaps({
		div: "#mapa3",
		lat: 21.00614,
		lng: -89.62285
	});

	mapa1.addMarker({
		lat: 19.03051,
		lng: -98.27785,
		title: 'Matriz Puebla',
		infoWindow: {
			content: '<p>Matriz Puebla<br /><br /><a href="geo:0,0?q=19.03051,-98.27785(Pronta%20Tres%20Puebla)">Abrir en Google Maps</p></a>'
		}
	});
	mapa2.addMarker({
		lat: 20.99716,
		lng: -89.63080,
		title: 'Merida 1',
		infoWindow: {
			content: '<p>Merida 1<br /><br /><a href="geo:0,0?q=20.99716,-89.63080(Pronta%20Tres%Merida%201)">Abrir en Google Maps</p></a>'
		}
	});
	mapa3.addMarker({
		lat: 21.00614,
		lng: -89.62285,
		title: 'Merida 2',
		infoWindow: {
			content: '<p>Merida 2<br /><br /><a href="geo:0,0?q=21.00614,-89.62285(Pronts%20Tres%20Merida%202)">Abrir en Google Maps</p></a>'
		}
	});
}
