//Enumerating Properties
	
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
	
	/*	Somtimes we need to iterate over OR enumerate(count, one by one) the properties in an object. We can
		do that using 'for in loop'.	*/
		for(let key in circle)
		{
			/*	So for every iteration 'key' will hold the value of 1 key, in this(circle) object.
				So it's returning both - Properties and Methods. */
			console.log(key);
			
			/*	if we get the value of the properties, then we can use the Bracket Notation. */
			console.log(circle[key]);
			//	 With Bracket Notation we can access the member.
			
			
			
		}
		
		for(let key2 in circle)
		{
			/*	If we want to see only the properties and not the methods.
				Then we can use the 'typeof' operator to check the type of this(circle[key2]) value.	*/
			if(typeof circle[key2] !== 'function')
				console.log('If Condition : ',key2, circle[key2]);
			//	Here draw is not seened because it is a method. 
		}
		
		/*	Another approachto get all the keys of the object(circle) as an the array	*/
			//	With this we can see all the members of the object(/of the function).
			const keys = Object.keys(circle);
			console.log(keys);
			
			
		/*	If we want to know, if an object has given property.	For that we use 'in' operator. */
			if('radius' in circle)
				console.log('Circle has a "radius"');
			
/*	CONCLUSION :- 
		To enumerate all the members in an object, we can use 'for in loop'.
		To get all the keys in an object, use 'Object.keys'.
		To check for existence of a property or a method in an object, use 'in' operator.
		*/