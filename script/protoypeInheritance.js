/*
		Function Prototype is object instance that will become the prototype for all object created using this function as a constructor.
		An Object prototype is object instance from which the object is inherited.
	
*/

function Cat (name,color) {
	this.name = name,
	this.color = color
}

Cat.prototype.age = 3

var fluffy new Cat ('Fluffy', 'White');
var muffin new Cat ('Fluffy', 'White');

fluffy.age = 5

console.log(fluffy.age) // 5
Cat.prototype.age = 4