//Creating object
	
	//Factory Function
	 function createCircle(radius) {
		 return {
			 radius,
			 draw: function() {
				 console.log('it returns');
			 }

		 };
	 }
	 const circle = createCircle(1);
	
	
	
	
	//CONSRUCTOR Property
		//The first letter sshould be upper-case
	
	function Circle(radius) {
		//instead of returning an object, we gona use 'this' keyword
		//console.log('this',this);
		this.radius = radius;
		this.draw = function() {
			console.log('Draw IT');
		}
	}
	const another = new Circle(1);

/*	Constructor Property :-
	Every object in JS has a roperty called 'constructor', and that references the function that was used to
	construct OR create that object.
	
	here are 2 objects - 'circle' and 'another'.
*/
//write below code on the console
	//another.constructor
	//circle.constructor
	

/*
	When we use creating object using object literal syntax, internally the JS engine uses 'Object'
	constructor	function.
*/

	let x = {}; // JS engine translate  like this - let x = new Object();

//In JavaScript we have few other built-in constructors for Examples are below :- 
	new String(); 	// for creating strings, but we use String litereals like - ' '," ", ` `(backtixk)
	new Boolean();	//for creating boolean, but we use Boolean literals like - true, false
	new Number();	// like - 1,2,3 and etc
	