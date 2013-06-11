// classic for loops
var primes = [2, 3, 5, 7, 11];

for(var i = 0; i < primes.length; i++){
	console.log(primes[i]);
}
	

// JSON 

var workshop = {
	"Conference" : "ShareConf",
	"Year" : 2013,
	"IsDeveloperRelatedContent" : true,
	"Speaker" : {
		"FirstName" : "Thorsten",
		"LastName" : "Hans"
	},
	"Attendees" : []
};

for(var property in workshop){
	console.log(property + ":" + workshop[property]);
}








	
