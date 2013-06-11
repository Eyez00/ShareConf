var AppViewModel = function(){
	
	this.contacts = ko.observableArray([]);
	
	this.addContact = function(contact){
		this.contacts.push(contact);
	};
	
	this.insertNewContact = function(){
		this.addContact(new Contact("Samuel","Zuercher"));	
	};
	this.init = function(){
		var repository = new MockupRepository();
		for(var i =0; i< repository.data.length; i++){
			this.addContact(repository.data[i]);
		}	
	};
}