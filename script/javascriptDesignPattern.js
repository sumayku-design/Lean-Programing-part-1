
/* 			== Design pattern =

 Tujuan pattern mempermudah maintaining aplikasi
 ==== function argument ====
 function myFunc (a, b, c) {
	return a + b + c;

 }

console.log (myFunc(1, 2, 3));
console.log (myFunc(1, 2, 3, 4));

				++ Magic Arguments ++
- Argument aren't require like .net
- Seperti semua argument variable di Js argument tidak tertulis.
- Argument yang tidak di sebut (Unspecified argument) menjadi undifined.
- Arguments tersedia lewat didalam argument object.
	|> seperti array tapi bukan

function myFunc() {
	var x = 0;
	for (var i = 0; i < argument.length; i++) {
		x = x + argument[i];
	}
	return x;
}

*/





/*			===== Chaining =====
- digunakan untuk membuat API yang lancar untuk di gunakan sebagai kebalikan dari obejct yang mutable (yg mungkin berubah)
- designing around returning object
- Popularized by jQuery

Menggunakan jQuery sebagai contoh chaining

jQuery('foo')
	.addClass('bar');
	.fadeIn('slow');
	.html('hello world');

*/


var Calc =function (start) {
	var that = this; // passing variabe
	this.add = function(x) {
		return that; // that value 
	};
	this.multiply = function(x) {
		return this;
	};
	this.add = function(callback) {
		callback(start);
		return this;
	};

};

new Calc(0)
	.add(1)
	.add(2)
	.multiply(3)
	.equals(function (result){
		console.log(result);
	});

/* 
		Asychronous Module Deffinition






*/




/* 
		Asychronous Module Deffinition






*/