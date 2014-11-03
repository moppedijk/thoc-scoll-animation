(function(){
	
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

})();