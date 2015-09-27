var Banner = (Banner || {});
var bannerDIV = "";

Object.append(Banner, {

	initialize: function() {
		bannerDIV = new Fx.Slide('bannerAreaDIV', {mode: 'horizontal',resetHeight: true});
		new Request.HTML({
			url: "banner.html",
			method: "get",
			update: $("bannerAreaDIV"),
			onComplete: function() {
			}
		}).send();
	},
	bannerIn: function() {
		bannerDIV.slideIn();
	},
	bannerOut: function() {
		bannerDIV.slideOut();
	}

});
