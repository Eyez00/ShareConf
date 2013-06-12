var SharePointRepository = function(siteUrl){
	this.siteUrl = siteUrl;

	this.updateWebTitle = function(newTitle){
		var ctx = new SP.ClientContext.get_current();
		var web = ctx.get_web();
		web.set_title(newTitle);

		ctx.load(web,'Title');

		// using inline (anonymous) callbacks

		ctx.executeQueryAsync(function(){
			console.log("Web title updated");
		}, function(sender,args){
			console.log(args.get_message());
		})
	};

	this.updateWebDescription = function(newDescription){
		var ctx = new SP.ClientContext.get_current();
		var web = ctx.get_web();
		web.set_description(newDescription);

		ctx.load(web, 'Description');
		// using regular methods as callbacks
		var onSuccess = function(){
			console.log("web description updated");
		};
		var onError = function(sender, args){
			console.log(args.get_message());
		};

		ctx.executeQueryAsync(onSuccess,onError);
	};
};