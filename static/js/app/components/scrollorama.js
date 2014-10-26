(function(){
	
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

})();