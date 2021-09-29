//Creating object
	//CONSRUCTOR function
		//The first letter sshould be upper-case
	
	function Circle(radius) {
		//instead of returning an object, we gona use 'this' keyword
		console.log('this',this);
		this.radius = radius;
		this.draw = function() {
			console.log('Draw IT');
		}
	}
	const another = new Circle(1);
	console.log(another);
	console.log(another.draw);
/*	
	'new' Keyword:-
		1.'new' operator create an empty object, 
		2.'new' points to 'this'
		3.and finnaly it will return that object from the function.
		
		'return this;' -> it will happen automatically when we use new keyword.
	
	'this' Keyword :- by default 'this' keyword points to the global objects if we can NOT put 'new' keyword.
		if we run this code inside browser, the global object is - 'window' object.
		if we run this code inside the node environment, the global object is - 'global'.	
	
	JAVA and C# developers use Constructor funtion.
*/	
	
	
	
	
	// FACTORY function
/*	 function createCircle(radius) {
		 return {
			 radius,
			 draw: function() {
				 console.log('it returns');
			 }

		 };
	 }
	 const circle = createCircle(1);
	// circle.draw();
*/