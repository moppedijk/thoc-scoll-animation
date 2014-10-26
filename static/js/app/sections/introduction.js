(function(){

	var Introduction = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#in-bg', {
				duration: 400,
				property: 'top', 
				start: 0,
				end: -200
			});

			this.component.animate('#in-intro', {
				duration: 400,
				property: 'margin-top',
				start: 250,
				end: 1000
			});

			this.component.animate('#in-content', {
				duration: 100,
				property: 'opacity',
				start: 1,
				end: 0
			});

			this.component.animate('#in-content', {
				duration: 100,
				property: 'margin-top',
				start: 50,
				end: 70
			});

			this.component.animate('#in-icon', {
				duration: 100,
				property: 'opacity',
				start: 1,
				end: 0
			});

			this.component.animate('#in-icon', {
				duration: 100,
				property: 'margin-top',
				start: 50,
				end: 70
			});
		}

		this.init();
	}

	MotionDesign.Sections.Introduction = Introduction;

})();