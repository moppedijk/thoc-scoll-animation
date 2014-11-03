(function(){

	var MechanicalComputer = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#mc-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0
			});

			this.component.animate('#mc-bg', {
				duration: 700,
				property: 'margin-top',
				start: 0,
				end: 500,
				delay: 700
			});

			this.component.animate('#mc-intro', {
				duration: 400,
				property: 'margin-top',
				start: -600,
				end: 100
			});

			this.component.animate('#mc-intro', {
				duration: 400,
				property: 'padding-top',
				start: 0,
				end: 600,
				delay: 800
			});

			this.component.animate('#mc-content', {
				duration: 200,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#mc-circle-top', {
				duration: 400,
				property: 'margin-left',
				start: -400,
				end: 155,
				delay: 100
			});

			this.component.animate('#mc-circle-icon', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 500
			});

			this.component.animate('#mc-header', {
				duration: 100,
				property: 'padding-top',
				start: 0,
				end: 112,
				delay: 250
			});

			this.component.animate('#mc-header', {
				duration: 100,
				property: 'padding-bottom',
				start: 0,
				end: 45,
				delay: 250
			});

			this.component.animate('#mc-circle-bottom', {
				duration: 300,
				property: 'margin-right',
				start: -400,
				end: 155,
				delay: 400
			});

			this.component.animate('#mc-circle-bottom', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 400
			});
		}

		this.init();
	}

	motionDesign.sections.MechanicalComputer = MechanicalComputer;

})();