// Singleton Pattern

if(!ShareConf){
	ShareConf = {};
	if(!ShareConf.Development){
		ShareConf.Development = {};
	}
}

ShareConf.Development.Logger = {
	info: function(message){
		if(console && console.log){
			console.log("INFO: " + message);
		}
	},

	warning: function(message){
		if(console && console.log){
			console.log("WARNING: " + message);
		}
	},

	error: function(message){
		if(console && console.log){
			console.log("ERROR: " + message);
		}
	}
};