(function(){

	var Miniaturisatie = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#mi-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0
			});

			this.component.animate('#mi-bg', {
				duration: 700,
				property: 'margin-top',
				start: 0,
				end: 500,
				delay: 700
			});

			this.component.animate('#mi-intro', {
				duration: 400,
				property: 'margin-top',
				start: -600,
				end: 100
			});

			this.component.animate('#mi-intro', {
				duration: 400,
				property: 'padding-top',
				start: 0,
				end: 600,
				delay: 800
			});

			this.component.animate('#mi-content', {
				duration: 200,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#mi-circle-top', {
				duration: 400,
				property: 'margin-left',
				start: -400,
				end: 155,
				delay: 100
			});

			this.component.animate('#mi-circle-icon', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 500
			});

			this.component.animate('#mi-header', {
				duration: 100,
				property: 'padding-top',
				start: 0,
				end: 160,
				delay: 250
			});

			this.component.animate('#mi-header', {
				duration: 100,
				property: 'padding-bottom',
				start: 0,
				end: 45,
				delay: 250
			});

			this.component.animate('#mi-circle-bottom', {
				duration: 300,
				property: 'margin-right',
				start: -400,
				end: 155,
				delay: 400
			});

			this.component.animate('#mi-circle-bottom', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 400
			});
		}

		this.init();
	}

	motionDesign.sections.Miniaturisatie = Miniaturisatie;

})();