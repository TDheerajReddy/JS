//Adding/Removing Properties
	
	function Circle(radius)
	{
		this.radius = radius;
		this.draw = function()
		{
			console.log('Hellow Draw');
		}
	}
	//Object is Dynamic
	const circle = new Circle(10);
	circle.draw();
	
	
//ADDING Property :- 
	//Method 1
	circle.location = { x: 1 }; /*	This(location) object is added to the 'Circle' function on the console
									when we write 'circle' on the console */
	//Method 2 'Bracket notation'
	circle['location'] = {y: 2};/*	It is useful when we want to Dynamically access a property name.
									Example Below */ 
	const propertyName = 'location';
	circle[propertyName] = {z:3};		// If we don't know the property name.
	
	//Bracket Notation another use is - if when we using property names that are not valid identifiers(symbols)
		//Example below
		//const propertyName2 = 'center-location'
		circle['center-location'] = {p:3};		// If we have any symbols/invalid identifiers like - space, -, and etc.
		
		
//REMOVING/DELETING Property :- 
	delete circle.location;
			//OR
	delete circle['location'];