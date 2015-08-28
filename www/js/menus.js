var menuHide = function() {
        menuSort.Reset();
        $("menuAreaDIV").fade("out");
        $("bannerAreaDIV").setStyle("display", "none");
};
var menuShow = function() {
        $("menuAreaDIV").fade("in");
        $("bannerAreaDIV").setStyle("display", "block");
        menuSort.Full();
};
var canvasShow = function() {
	$("backgroundDIV").setStyle("display", "none");
	$("canvasDIV").setStyle("display", "block");
}
var canvasHide = function() {
	$("canvasDIV").setStyle("display", "none");
	$("canvasDIV").setStyle("background-image", "none");
	$("backgroundDIV").setStyle("display", "block");
}

var menuSort = (menuSort || {});
var cord = [];
var slides = "";

Object.append(menuSort, {

	initialize: function() {
		new Request.HTML({
			url: "menus.html",
			method: "get",
			update: $("menuAreaDIV"),
			onRequest: function() {
				$("menuAreaDIV").innerHTML = "<img src='img/loading.gif' />";
			},
			onComplete: function() {
				menuSort.calculate();
				activateButtons();
			}
		}).send();
	},
	calculate: function() {
		cord = [];
		slides = $$('ul#menuSort li');
		slides.each(function(el,e) {
			cord[e] = el.getPosition();
		});
		menuSort.Full();
	},
	effects: function(sort,time) {
		if (!time) time = 1000;
//		sound5.playclip();
		slides.each(function(el,e) {
			var sortEffects = new Fx.Morph(slides[e], {duration: time, transition: Fx.Transitions.Sine.easeOut});
			if (sort.contains(e) == true) {
				sortEffects.start({
					'opacity': 1,
					'position': 'absolute',
					'left': cord[sort.indexOf(e)].x,
					'top': cord[sort.indexOf(e)].y-100,
					'z-index': 1000
				});
			} else {
				sortEffects.start({
					'opacity': 0,
					'position': 'absolute',
					'left': 0,
					'top': 0,
					'z-index': -1
				});
			}
		});
	},
	Full: function() {
		menuSort.effects([0,1,2,3,4,5,6,7]);
	},
	Reset: function() {
		menuSort.effects([0]);
	}
});

var activateButtons = function() {
	if ($("closeCanvas")){
		$("closeCanvas").addEvent("click", function(){
			canvasHide();
			menuShow();
		});
	}
	if ($('option01')){
		$('option01').addEvent('click', function(){
			menuHide();
			if ($("canvasDIV").getStyle("display")=="none") canvasShow(); else $("canvasDIV").setStyle("background-image", "none");

			new Request.HTML({
				url: "productos.html",
				method: "get",
				update: $("canvasContentDIV"),
				onComplete: function() {
					$$("a.slideLink").each(function(el) {
						activateSlides(el.id+"DIV",el.id);
					});
				}
			}).send();

		});
	}
	if ($('option02')){
        	$('option02').addEvent('click', function(){
       			menuHide();
			if ($("canvasDIV").getStyle("display")=="none") canvasShow(); else $("canvasDIV").setStyle("background-image", "none");
//			$("canvasDIV").setStyle("background-image", "url('img/fondo_madera.jpg')");
//			$("canvasDIV").setStyle("background-size", "cover");
//			$("canvasDIV").setStyle("background-repeat", "repeat-y");
//			$("canvasDIV").setStyle("background-position", "center center");

//			new Request.HTML({
//				url: "http://yolagunero-robernet.rhcloud.com/products",
//				method: "get",
//				update: $("canvasContentDIV"),
//				onRequest: function() {
//					$("canvasContentDIV").innerHTML = "<img src='img/loading.gif' />";
//				},
//				onComplete: function() {
//				},
//				onFailure: function() {
//					$("canvasContentDIV").innerHTML = "<h1>Error en la conexion</h1><h2>No se pudo cargar el menu.< br/>Revise su conexion a Internet</h2>";
//				}
//			}).send();
		});
	}
	if ($('option03')){
        	$('option03').addEvent('click', function(){
			menuHide();
			if ($("canvasDIV").getStyle("display")=="none") canvasShow(); else $("canvasDIV").setStyle("background-image", "none");

			new Request.HTML({
				url: "precios.html",
				method: "get",
				update: $("canvasContentDIV"),
				onComplete: function() {
					$$("a.slideLink").each(function(el) {
						activateSlides(el.id+"DIV",el.id);
					});
				}
			}).send();

		});
	}
	if ($('option04')){
        	$('option04').addEvent('click', function(){
			menuHide();
			if ($("canvasDIV").getStyle("display")=="none") canvasShow(); else $("canvasDIV").setStyle("background-image", "none");
			$("canvasContentDIV").innerHTML = "<center><h1>Opcion 04</h1><center>";
        	});
	}
	if ($('option05')){
		$('option05').addEvent('click', function(){
			menuHide();
			if ($("canvasDIV").getStyle("display")=="none") canvasShow(); else $("canvasDIV").setStyle("background-image", "none");
			new Request.HTML({
				url: "contacto.html",
				method: "get",
				update: $("canvasContentDIV"),
				onComplete: function() {
					showMaps();
				}
			}).send();
		});
	}
	if ($('option06')){
        	$('option06').addEvent('click', function(){
			menuHide();
			if ($("canvasDIV").getStyle("display")=="none") canvasShow(); else $("canvasDIV").setStyle("background-image", "none");
			$("canvasContentDIV").innerHTML = "<center><h1>Opcion 06</h1><center>";
        	});
	}
	if ($('option07')){
        	$('option07').addEvent('click', function(){
			menuHide();
			if ($("canvasDIV").getStyle("display")=="none") canvasShow(); else $("canvasDIV").setStyle("background-image", "none");
			$("canvasContentDIV").innerHTML = "<center><h1>Opcion 07</h1><center>";
        	});
	}
	if ($('option08')){
        	$('option08').addEvent('click', function(){
			menuHide();
			if ($("canvasDIV").getStyle("display")=="none") canvasShow(); else $("canvasDIV").setStyle("background-image", "none");
			$("canvasContentDIV").innerHTML = "<center><h1>Opcion 08</h1><center>";
        	});
	}
};
