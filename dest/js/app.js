var motionDesign = motionDesign || {};
	motionDesign.components = motionDesign.components || {};
	motionDesign.sections = motionDesign.sections || {};

(function(){
	
	/**
	 	Controller object that initializes the application
	*/

	motionDesign.app = {

		init: function () {
			
			motionDesign.config = {
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

			motionDesign.app.startAnimation();
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

			motionDesign.components.scrollorama.init();
		}
	}

})();;(function(){
	
	motionDesign.components.scrollorama = {

		init: function() {

			/*
				Views
			*/

			var scrollorama = $.scrollorama({
				blocks: ".scrollblock",
				enablePin:false
			});

			var introduction = new motionDesign.sections.Introduction(scrollorama);
			var mechanicalComputer = new motionDesign.sections.MechanicalComputer(scrollorama);
			var mechanicalComputer2 = new motionDesign.sections.MechanicalComputer2(scrollorama);
			var electronicalComputer = new motionDesign.sections.ElectronicalComputer(scrollorama);
			var miniaturisatie = new motionDesign.sections.Miniaturisatie(scrollorama);
			var miniaturisatie2 = new motionDesign.sections.Miniaturisatie2(scrollorama);
			var personalComputer = new motionDesign.sections.PersonalComputer(scrollorama);
			var personalComputer2 = new motionDesign.sections.PersonalComputer2(scrollorama);
			var mobileDevices = new motionDesign.sections.MobileDevices(scrollorama);
			var mobileDevices2 = new motionDesign.sections.MobileDevices2(scrollorama);

			/*
				Sounds
			*/

			var SoundManager = new motionDesign.components.SoundManager([
				{
					id: "introduction",
					url: "sound/introduction.wav"
				},
				{
					id: "mechanicalComputer",
					url: "sound/mechanical_computer.wav"
				},
				{
					id: "electronicalComputer",
					url: "sound/electronical_computer.wav"
				},
				{
					id: "miniturisatie",
					url: "sound/miniturisatie.mp3"
				},
				{
					id: "personalComputer",
					url: "sound/personal_computer.wav",
				},
				{
					id: "mobileDevices",
					url: "sound/mobile_devices.wav"
				}
			]);

			/*
				Onchange handler Scrollorama
			*/

			scrollorama.onBlockChange(function(){
				switch(scrollorama.blockIndex) {
					case 0:
						console.log("Introduction");
						SoundManager.play("introduction");
						break;
					case 1:
						console.log("MechanicalComputer");
						SoundManager.play("mechanicalComputer");
						break;
					case 2:
						console.log("MechanicalComputern 2");
						break;
					case 3:
						console.log("ElectronicalComputer");
						SoundManager.play("electronicalComputer");
						break;
					case 4:
						console.log("ElectronicalComputer 2");
						break;
					case 5:
						console.log("Miniaturisatie");
						SoundManager.play("miniturisatie");
						break;
					case 6:
						console.log("Miniaturisatie 2");
						break;
					case 7:
						console.log("PersonalComputer");
						SoundManager.play("personalComputer");
						break;
					case 8:
						console.log("PersonalComputer 2");
						break;
					case 9:
						console.log("MobileDevices");
						SoundManager.play("mobileDevices");
						break;
					case 10:
						console.log("MobileDevices 2");
						break;
					case 11:
						console.log("Pay Off");
						// SoundManager.play("payOff");
						break;
				}
			});
		}
	};

})();;(function(){
	
	var SoundManager = function(obj) {

		this.sounds = false;

		this.onready = false;

		this.currentSound = false;

		this.init = function(obj) {
			var _self = this;

			this.sounds = obj;

			this.soundManager = soundManager.setup({
			  	url: '/sound/swf/',
			  	flashVersion: 9, // optional: shiny features (default = 8)
			  	// optional: ignore Flash where possible, use 100% HTML5 mode
			  	preferFlash: false,
			  	onready: function() {
			  		
			    	for(var i = 0; i < _self.sounds.length; i++) {
				    	var newSound = soundManager.createSound({
				    		id: _self.sounds[i].id,
				    		url: _self.sounds[i].url
				    	});
			    	}

			    	_self.onready = true;
			    	_self.play(_self.sounds[0].id);
			  	}
			});
		}

		this.play = function(soundId) {
			var _self = this;

			if(this.onready) {
				if(this.currentSound) {
					this.soundManager.stop(this.currentSound);
				}
				this.currentSound = soundId;
				this.soundManager.play(this.currentSound);
			}
		}

		this.init(obj);
	};

	motionDesign.components.SoundManager = SoundManager;

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

	motionDesign.sections.Introduction = Introduction;

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

})();;(function(){

	var MechanicalComputer2 = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#mc2-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0,
			});

			this.component.animate('#mc2-bg', {
				duration: 200,
				property: 'opacity',
				start: 1,
				end: 0.3,
			});

			this.component.animate('#mc-list-item1', {
				duration: 200,
				property: 'top',
				start: -100,
				end: 40
			});

			this.component.animate('#mc-list-item1', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1
			});

			this.component.animate('#mc-list-item2', {
				duration: 200,
				property: 'top',
				start: 25,
				end: 165,
				delay: 200
			});

			this.component.animate('#mc-list-item2', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#mc-list-item3', {
				duration: 200,
				property: 'top',
				start: 150,
				end: 290,
				delay: 400
			});

			this.component.animate('#mc-list-item3', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 400
			});

			this.component.animate('#mc-list-item4', {
				duration: 200,
				property: 'top',
				start: 275,
				end: 415,
				delay: 600
			});

			this.component.animate('#mc-list-item4', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 600
			});

			this.component.animate('#mc-list-item5', {
				duration: 200,
				property: 'top',
				start: 400,
				end: 540,
				delay: 800
			});

			this.component.animate('#mc-list-item5', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 800
			});
		}

		this.init();
	}

	motionDesign.sections.MechanicalComputer2 = MechanicalComputer2;

})();;(function(){

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

})();;(function(){

	var Miniaturisatie2 = function(component) {

		this.component = component;

		this.init = function() {

			this.component.animate('#mi2-bg', {
				duration: 700,
				property: 'top',
				start: -500,
				end: 0,
			});

			this.component.animate('#mi2-bg', {
				duration: 100,
				property: 'opacity',
				start: 1,
				end: 0.3,
			});

			this.component.animate('#mi2-list-item1', {
				duration: 200,
				property: 'top',
				start: -100,
				end: 40
			});

			this.component.animate('#mi2-list-item1', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1
			});

			this.component.animate('#mi2-list-item2', {
				duration: 200,
				property: 'top',
				start: 25,
				end: 165,
				delay: 200
			});

			this.component.animate('#mi2-list-item2', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#mi2-list-item3', {
				duration: 200,
				property: 'top',
				start: 150,
				end: 290,
				delay: 400
			});

			this.component.animate('#mi2-list-item3', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 400
			});

			this.component.animate('#mi2-list-item4', {
				duration: 200,
				property: 'top',
				start: 275,
				end: 415,
				delay: 600
			});

			this.component.animate('#mi2-list-item4', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 600
			});

			this.component.animate('#mi2-list-item5', {
				duration: 200,
				property: 'top',
				start: 400,
				end: 540,
				delay: 800
			});

			this.component.animate('#mi2-list-item5', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 800
			});
		}

		this.init();
	}

	motionDesign.sections.Miniaturisatie2 = Miniaturisatie2;

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

			this.component.animate('#md-bg', {
				duration: 700,
				property: 'margin-top',
				start: 0,
				end: 500,
				delay: 700
			});

			this.component.animate('#md-intro', {
				duration: 400,
				property: 'margin-top',
				start: -600,
				end: 100
			});

			this.component.animate('#md-intro', {
				duration: 400,
				property: 'padding-top',
				start: 0,
				end: 600,
				delay: 800
			});

			this.component.animate('#md-content', {
				duration: 200,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#md-circle-top', {
				duration: 400,
				property: 'margin-left',
				start: -400,
				end: 155,
				delay: 100
			});

			this.component.animate('#md-circle-icon', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 500
			});

			this.component.animate('#md-header', {
				duration: 100,
				property: 'padding-top',
				start: 0,
				end: 112,
				delay: 250
			});

			this.component.animate('#md-header', {
				duration: 100,
				property: 'padding-bottom',
				start: 0,
				end: 45,
				delay: 250
			});

			this.component.animate('#md-circle-bottom', {
				duration: 300,
				property: 'margin-right',
				start: -400,
				end: 155,
				delay: 400
			});

			this.component.animate('#md-circle-bottom', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 400
			});
		}

		this.init();
	}

	motionDesign.sections.MobileDevices = MobileDevices;

})();;(function(){

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

			this.component.animate('#pc-bg', {
				duration: 700,
				property: 'margin-top',
				start: 0,
				end: 500,
				delay: 700
			});

			this.component.animate('#pc-intro', {
				duration: 400,
				property: 'margin-top',
				start: -600,
				end: 100
			});

			this.component.animate('#pc-intro', {
				duration: 400,
				property: 'padding-top',
				start: 0,
				end: 600,
				delay: 800
			});

			this.component.animate('#pc-content', {
				duration: 200,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 200
			});

			this.component.animate('#pc-circle-top', {
				duration: 400,
				property: 'margin-left',
				start: -400,
				end: 155,
				delay: 100
			});

			this.component.animate('#pc-circle-icon', {
				duration: 100,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 500
			});

			this.component.animate('#pc-header', {
				duration: 100,
				property: 'padding-top',
				start: 0,
				end: 112,
				delay: 250
			});

			this.component.animate('#pc-header', {
				duration: 100,
				property: 'padding-bottom',
				start: 0,
				end: 45,
				delay: 250
			});

			this.component.animate('#pc-circle-bottom', {
				duration: 300,
				property: 'margin-right',
				start: -400,
				end: 155,
				delay: 400
			});

			this.component.animate('#pc-circle-bottom', {
				duration: 300,
				property: 'opacity',
				start: 0,
				end: 1,
				delay: 400
			});
		}

		this.init();
	}

	motionDesign.sections.PersonalComputer = PersonalComputer;

})();;(function(){

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