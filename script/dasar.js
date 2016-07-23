// =============          OOP
/*========= ======== Object procedural ======================

1. do this
2. do this next
3. and then this...
4. and so on
5. and the next line
6. top to bottom

=======================================================================*/

/*============================================================


	properties and method is different

	*properties* "characteristic"	|   *Method "Action"
	var andreas = designer			|

	web designer : true         	|   html, css
	graphic designer				|  	photoshop, illustrator
	front end designer				| 	javascripth, node.js, framework js

	object create in two ways :
	- object literal      	: Instance
	- object prototype		: Prototype    ====  dapat membuat banyak Instance object

	there are three main categories of objects:
	- Host Objects.
	- Core Objects.
	- Object defined by the code's author

	- Host Objects.
		Document
		Window
		Element
		Event
		Node
		Comment
		Console
	- Core object
		Math
		Object
		String
		Boolean
		Array
		Date
		Number
	- Object defined by the code's author
		jQuery
		Angular js


==============================================================*/


/* Scope && Global
var lsss = "3";

function ts(){
	var ls = "1";
	alert(ls);

	function tsOther () {
		var lss = "2";
		alert(lss);
		alert(lsss);
		alert(ls);
	}

	tsOther();
	alert(lss); // scope example
}

ts();

// alert(ls); // not call twice because is local in a function.


==================================================================
||																||
||				=====================================			||					
||				| function==================		|			||	
||				|	|						|		|			||		
||  GLOBAL   	|	|			function	|		|			||	
||				|	|======================			|			||	
||				=====================================			||											
|| 																||		
==================================================================

*/ 










// function Friend(name){
// 	this.name = name;
// }
//  alert(this);

//  function sayHello(){
//  	window.alert("hello");
//  }

// window.sayHello();

// function alert() {
// 	console.log("Hello bisa kan");
// }
// alert();

/*
var example = "value";
// var exemple = 2;

function cobaScope(){
	alert(example);
	var cobaScopeContoh = "?";
}

cobaScope();

alert(cobaScopeContoh);
*/

// var kulia = "ITKP";
// var kerja = "Agency Advertising";
// var reality = "Jadi designer";

/*
var penglaman = {
	pertama: "trikarya idea sakti",
	belajar : "ITKP",
	selama : 2,
	status : true,

	skill: function() {
		if (penglaman.belajar === "LULUS"){
			penglaman.belajar = "ITKP";
			alert("codenya jalan");
		}
	}
};


penglaman.belajar = "tidak lulus";

penglaman.skill();
*/


/*
var design = {
	skill:"photoshop",
	exp: "2Years"
};
function  Job(office, exp) {
	this.office = office;
	this.exp = exp;
}

var webDesign = new Job("Trikarya Idea Sakti", "1Year");
var frontEnd = new Job("Mumu", "3Month");

alert(webDesign.office);
alert(frontEnd.office);
*/


