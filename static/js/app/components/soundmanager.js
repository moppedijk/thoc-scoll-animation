(function(){
	
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

})();