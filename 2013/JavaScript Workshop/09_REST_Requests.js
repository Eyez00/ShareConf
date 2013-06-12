// REST & SharePoint

// Create a new listitem with REST


function CreateANewListItem(listName, listItemProperties){
	var requestUrl = __spPageContextInfo.webAbsolutUrl + "/_api/web/lists/getbytitle('tasks')/items/getbyid(1)";

	listItemProperties["Title"] = "My new ListItem";
	var listItemType = "SP.Data." + listName + "ListItem";

	var payload = listItemProperties;
	payload["__metadata"] = {"type": listItemType};

	var params = {
		url : requestUrl,
		type : "POST",
		data : JSON.stringify(payload),
		headers:{
			"Accept" : "application/json; odata=verbose",
			"content-type" : "application/json; odata=verbose",
			"X-RequestDigest" : $("#__REQUESTDIGEST").val()
		}
	}

}



// Update / Create / Delete

function DeleteListItemViaRest(){
	var requestUrl = __spPageContextInfo.webAbsolutUrl + "/_api/web/lists/getbytitle('tasks')/items/getbyid(1)";

	var params = {
		url : requestUrl,
		type: 'DELETE',
		headers: {
			"Accept" : "application/json; odata=verbose",
			"content-type" : "application/json; odata=verbose",
			"X-RequestDigest" : $("#__REQUESTDIGEST").val()
		}
	};

	$.ajax(params).done(onSuccess).fail(onError);
}