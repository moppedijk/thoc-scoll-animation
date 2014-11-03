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

			this.component.animate('#ec-bg', {
				duration: 700,
				property: 'margin-top',
				start: 0,
				end: 500,
				delay: 700
			});

			this.component.animate('#ec-intro', {
				duration: 400,
				property: 'margin-top',
				start: -600,
				end: 100
			});

			this.component.animate('#ec-intro', {
				duration: 400,
				property: 'padding-top',
				start: 0,
				end: 600,
				delay: 800
			});

			this.component.animate('#ec-content', {
				duration: 200,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#ec-circle-top', {
				duration: 400,
				property: 'margin-left',
				start: -400,
				end: 155,
				delay: 100
			});

			this.component.animate('#ec-circle-icon', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 500
			});

			this.component.animate('#ec-header', {
				duration: 100,
				property: 'padding-top',
				start: 0,
				end: 112,
				delay: 250
			});

			this.component.animate('#ec-header', {
				duration: 100,
				property: 'padding-bottom',
				start: 0,
				end: 45,
				delay: 250
			});

			this.component.animate('#ec-circle-bottom', {
				duration: 300,
				property: 'margin-right',
				start: -400,
				end: 155,
				delay: 400
			});

			this.component.animate('#ec-circle-bottom', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 400
			});

			/*
				EC 2 - 
			*/

			this.component.animate('#ec2-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0,
			});

			this.component.animate('#ec2-bg', {
				duration: 100,
				property: 'opacity',
				start: 1,
				end: 0.3,
			});

			this.component.animate('#ec2-item1', {
				duration: 300,
				property: 'top',
				start: -100,
				end: 100,
				delay: 200
			});

			this.component.animate('#ec2-item1', {
				duration: 300,
				property: 'left',
				start: -320,
				end: 0,
				delay: 200
			});

			this.component.animate('#ec2-item1', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#ec2-item2', {
				duration: 300,
				property: 'top',
				start: -100,
				end: 200,
				delay: 200
			});

			this.component.animate('#ec2-item2', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#ec2-item3', {
				duration: 300,
				property: 'top',
				start: -100,
				end: 300,
				delay: 200
			});

			this.component.animate('#ec2-item3', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#ec2-item2', {
				duration: 300,
				property: 'left',
				start: 0,
				end: 320,
				delay: 200
			});

			this.component.animate('#ec2-item3', {
				duration: 300,
				property: 'left',
				start: 320,
				end: 640,
				delay: 200
			});
		}

		this.init();
	}

	motionDesign.sections.ElectronicalComputer = ElectronicalComputer;

})();