class SharePointRepository
	constructor: (url) ->
		@url = url
	onError: (error) =>
		@log error
	log: message ->
		console.log error if console && console.log

class SharePointListRepository extends SharePointRepository
	constructor: (url, listName) ->
		@url = url
		@listName = listName