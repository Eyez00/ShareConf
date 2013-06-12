var Animal = function(name){
	this.name = name;
}

var Cat = function(name, race){
	this.name = name;
	this.race = race;

	this.eat = function(){
		console.log("yummy");
	}
}

Cat.prototype = new Animal();

var myDog = new Animal("Amy");
console.log(myDog);

var myCat = new Cat("Tipsy", "House-Cat");
myCat.eat();
console.log(myCat);
