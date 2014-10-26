(function(){

	var MobileDevices = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#md-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0
			});
		}

		this.init();
	}

	MotionDesign.Sections.MobileDevices = MobileDevices;

})();