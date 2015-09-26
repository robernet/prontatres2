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
			content: '<p>Matriz Puebla</p>'
		}
	});
        mapa2.addMarker({
                lat: 20.99716,
                lng: -89.63080,
                title: 'Merida 1',
                infoWindow: {
                        content: '<p>Merida 1</p>'
                }
        });
        mapa3.addMarker({
                lat: 21.00614,
                lng: -89.62285,
                title: 'Merida 2',
                infoWindow: {
                        content: '<p>MMerida 2/p>'
                }
        });

}
