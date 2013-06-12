'use strict';

window.Workshop or = {}

window.Workshop.GenericRepository = class GenericRepository

	buildUrl: (appendix) ->
		_spPageContextInfo.webAbsoluteUrl + appendix

	getListItemType: (listName) ->
		"SP.Data.#{listName}ListItem"

	createListItems: (properties, listName) =>
		payload = properties
		listItemType = @getListItemType listName
		payload["__metadata"] = { "type" : listItemType}	

		params = {
			url : requestUrl,
			type : 'POST',
			data : JSON.stringify(payload)
			headers : {
			 "Accept" : "application/json; odata=verbose",
			 "content-type" : "application/json; odata=verbose",
			 "X-RequestDigest" : $("#__REQUESTDIGEST").val()
			}
		}	
