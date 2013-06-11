// classes

function Actor(name){
	this.name = name;

	this.introduce = function(){
		console.log("My name is " + this.name);
	}

}

Actor.prototype.printMovies = function(){
	console.log("iRobot");
	console.log("Indipendence Day");
	console.log("And as " + this.name + " the prince from bellair" );
};


var actor1 = new Actor("Will Smith");
actor1.introduce();
actor1.printMovies();

// Inheritance


function SilentActor(name){
	this.name = "Silent " + name;

	this.introduce = function(){
		console.log("WHISPER: my name is " + this.name);
	}
}

SilentActor.prototype = new Actor();

var silentActor = new SilentActor("Bob");
silentActor.introduce();
silentActor.printMovies();




