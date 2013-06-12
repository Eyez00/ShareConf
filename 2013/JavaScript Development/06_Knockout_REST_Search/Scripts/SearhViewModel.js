var SearchViewModel = function(){
	var that = this;
	that.results = ko.observableArray([]);
	that.searchTerm = ko.observable("");
	that.onSearch = function(){
		that.results.removeAll();
		var requestUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/search/query?querytext='" + that.searchTerm() + "'";
		var params = {
			url : requestUrl,
			method: "GET",
			headers : { "accept": "application/json;odata=verbose"}
		}
		$.ajax(params).done(that.onSuccess).fail(that.onError);
	};
	
	that.onSuccess = function(data){
		var results = data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
		for (var i = 0; i < results.length; i++) { 
            that.results.push({name: results[i].Cells.results[3].Value});
		}
	};
	
	that.onError = function(err){
		console.log(err);	
	};
};