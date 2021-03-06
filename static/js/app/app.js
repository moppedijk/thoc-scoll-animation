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

})();