// namespace

if(!window.WorkshopNamespace){
	window.WorkshopNamespace = {};
}

WorkshopNamespace.SharePointRepository = function() {
	this.init = function(){
		console.log("Repository initialized");
	}
};


function ReadData(){
	var repository = new WorkshopNamespace.SharePointRepository();
	repository.init();
}

