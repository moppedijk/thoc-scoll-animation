var MotionDesign = MotionDesign || {};
	MotionDesign.Components = MotionDesign.Components || {};
	MotionDesign.Sections = MotionDesign.Sections || {};

(function(){
	
	/**
	 	Controller object that initializes the application
	*/

	MotionDesign.App = {

		init: function () {
			
			MotionDesign.config = {
				appId: "app",
				sections: [
					{
						name: "Introduction",
						chapter: 1,
						className: "in",
						id: "in"
					},
					{
						name: "Mechanical Computer",
						chapter: 2,
						className: "mc",
						id: "mc"
					}
				]
			}

			MotionDesign.App.startAnimation();
		},
		startAnimation: function() {

			var header = $("#in-header", "#in");
			var content = $("#in-content", "#in");
			var icon = $("#in-icon", "#in");
			var scroll = $("#in-scroll", "#in");

			TweenLite.fromTo(header, 0.8, 
				{ opacity: 0, paddingTop: "100px" }, 
				{ opacity: 1, paddingTop: "0px", ease: Bounce.easeOut }
			);

			TweenLite.fromTo(content, 0.5, 
				{ opacity: 0 },
				{ opacity: 1, paddingTop: "0px", delay: 0.8 }
			);

			TweenLite.fromTo(icon, 0.3, 
				{ opacity: 0 },
				{ opacity: 1, delay: 1 }
			);

			TweenLite.fromTo(scroll, 0.3, 
				{ opacity: 0, left: 0 },
				{ opacity: 1, left: 60, delay: 1.3 }
			);

			MotionDesign.Components.Scrollorama.init();
		}
	}

})();;(function(){
	
	MotionDesign.Components.Scrollorama = {

		init: function() {

			var scrollorama = $.scrollorama({
				blocks: ".scrollblock",
				enablePin:false
			});

			var introduction = new MotionDesign.Sections.Introduction(scrollorama);
			var mechanicalComputer = new MotionDesign.Sections.MechanicalComputer(scrollorama);
			var electronicalComputer = new MotionDesign.Sections.ElectronicalComputer(scrollorama);
			var miniturisatie = new MotionDesign.Sections.Miniturisatie(scrollorama);
			var personalComputer = new MotionDesign.Sections.PersonalComputer(scrollorama);
			var mobileDevices = new MotionDesign.Sections.MobileDevices(scrollorama);

			scrollorama.onBlockChange(function(){
				switch(scrollorama.blockIndex) {
					case 0:
						console.log("Introduction");
						break;
					case 1:
						console.log("MechanicalComputer");
						break;
					case 2:
						console.log("MechanicalComputer");
						break;
					case 3:
						console.log("ElectronicalComputer");
						break;
					case 4:
						console.log("Miniturisatie");
						break;
					case 5:
						console.log("PersonalComputer");
						break;
					case 6:
						console.log("MobileDevices");
						break;
					case 7:
						console.log("Pay Off");
						break;
				}
			});
		}
	}

})();;(function(){

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

})();;(function(){

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

})();;(function(){

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

			this.component.animate('#mc2-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0,
			});

			this.component.animate('#mc2-bg', {
				duration: 100,
				property: 'opacity',
				start: 1,
				end: 0.3,
			});
		}

		this.init();
	}

	MotionDesign.Sections.MechanicalComputer = MechanicalComputer;

})();;(function(){

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

})();;(function(){

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

})();;(function(){

	var PersonalComputer = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#pc-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0
			});
		}

		this.init();
	}

	MotionDesign.Sections.PersonalComputer = PersonalComputer;

})();