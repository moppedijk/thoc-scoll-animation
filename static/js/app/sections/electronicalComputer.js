(function(){

	var ElectronicalComputer = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#ec-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0
			});
		}

		this.init();
	}

	MotionDesign.Sections.ElectronicalComputer = ElectronicalComputer;

})();