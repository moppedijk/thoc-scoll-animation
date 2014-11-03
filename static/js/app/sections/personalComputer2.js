(function(){

	var PersonalComputer2 = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#pc2-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0,
			});

			this.component.animate('#pc2-bg', {
				duration: 100,
				property: 'opacity',
				start: 1,
				end: 0.3,
			});

			this.component.animate('#pc2-item1', {
				duration: 300,
				property: 'top',
				start: -100,
				end: 100,
				delay: 200
			});

			this.component.animate('#pc2-item1', {
				duration: 300,
				property: 'left',
				start: -320,
				end: 0,
				delay: 200
			});

			this.component.animate('#pc2-item1', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#pc2-item2', {
				duration: 300,
				property: 'top',
				start: -100,
				end: 200,
				delay: 200
			});

			this.component.animate('#pc2-item2', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#pc2-item3', {
				duration: 300,
				property: 'top',
				start: -100,
				end: 300,
				delay: 200
			});

			this.component.animate('#pc2-item3', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#pc2-item2', {
				duration: 300,
				property: 'left',
				start: 0,
				end: 320,
				delay: 200
			});

			this.component.animate('#pc2-item3', {
				duration: 300,
				property: 'left',
				start: 320,
				end: 640,
				delay: 200
			});
		}

		this.init();
	}

	motionDesign.sections.PersonalComputer2 = PersonalComputer2;

})();