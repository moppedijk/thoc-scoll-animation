(function(){

	var MobileDevices2 = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#md2-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0
			});

			this.component.animate('#md2-bg', {
				duration: 100,
				property: 'opacity',
				start: 1,
				end: 0.3,
			});

			this.component.animate('#md2-list-item1', {
				duration: 200,
				property: 'top',
				start: -100,
				end: 40
			});

			this.component.animate('#md2-list-item1', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1
			});

			this.component.animate('#md2-list-item2', {
				duration: 200,
				property: 'top',
				start: 25,
				end: 165,
				delay: 200
			});

			this.component.animate('#md2-list-item2', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#md2-list-item3', {
				duration: 200,
				property: 'top',
				start: 150,
				end: 340,
				delay: 400
			});

			this.component.animate('#md2-list-item3', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 400
			});
		}

		this.init();
	}

	motionDesign.sections.MobileDevices2 = MobileDevices2;

})();