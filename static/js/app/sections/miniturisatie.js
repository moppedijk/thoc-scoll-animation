(function(){

	var Miniturisatie = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#mi-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0
			});
		}

		this.init();
	}

	MotionDesign.Sections.Miniturisatie = Miniturisatie;

})();