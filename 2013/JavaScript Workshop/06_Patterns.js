// Patterns

// Singleton

if(!window.Workshop){
	window.Workshop = {};
}

window.Workshop.Logger = {

	logError : function(errorMessage, level){
		console.log("ERROR: " + level + " - " + errorMessage);
	};
};

Workshop.Logger.logError("Something went wrong!", 100);

// static method pattern

window.Workshop.logInfo = function(infoMessage, level){
	console.log("INFO: " + level + " - " + infoMessage);
}











