//Abstraction
	
	function Circle(radius)
	{
		this.radius = radius;
		this.defaultLocation = {x: 0, y: 0};
		this.computeOptimumLocation = function(factor)
		{
			//...
			// This function may be call in only draw methiod
			console.log('Hellow computeOptimumLocation');
		}
		this.draw = function()
		{
			this.computeOptimumLocation(0.1);	//calling 'computeOptimumLocation' funtion in draw function.
			console.log('Hellow Draw');
		}
	}
	//Object is Dynamic
	const circle = new Circle(10);
	
	circle.defaultLocation = false;	//not all members are accessible to us(consumer/client) of this(circle) object.
	//circle.computeOptimumLocation();
	circle.draw();		//	We got wier error at run-time
	//Output	Without comment line 23
		/*	
			2 Hellow computeOptimumLocation			index12.js:11
			Hellow Draw								index12.js:16
		*/
//ABSTRACTION :- 
	/*	Hide the Details and Complexity , And show or expose only the essentials.	*/
	
		/*	In this example  we should hide property - 'defaultLocation' and method - 'computeOptimumLocation'.
			And also used for NO modification/updation everywhere/anywhere.No number of changes in the source
			code.
			So comment line  23. and in 'draw' function pass argument of 'computeOptimumLocation' function.
		*/