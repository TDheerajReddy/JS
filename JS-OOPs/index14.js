//Getters/Setters
	//Private Properties and Methods
	function Circle(radius)
	{		
		this.radius = radius;	//	'this' keyword poit to the 'circle' object, because we use 'new. keyword.
		
		/*	More accurately these are not private members of the 'circle' object, because technically they are
			not inside of the 'circle' object. There are local variables that we have defined inside of the 
			'Circle' funtion. But from an Object-Oriented point of view, we can prefer to them as Private members of the circle
			object.			
			*/
		//Set this method also as private using 'let' keyword.	Convert this method to private method.
		let defaultLocation = {x: 0, y: 2};		/*	So we have this private property, We can not access this
											from the outside. But what if we display somewhere on the
											application. So we don't wanna modify. is just be able to read it,
											So one solution is  to define a method. See below code.	*/
		this.getDefaultLocation = function()
		{	/*	Oncce again we are dealing with inner functionhere. The closure of this funtion includes
				all the variables defined here as well as all the variables defined in its parent functiona. */
			return defaultLocation;
		};

		this.draw = function()
		{
			console.log('Hellow Draw');
		};
		// So if we want to set 'defaultLocation' property then use defineProperty.
		Object.defineProperty(this, 'defaultLocation', {
			get: function()
			{
				return defaultLocation;
			},
			set: function(value)
			{ /*	But what is interesting is the, because we are using a function, in this function we can
					perform some validations for this value, before setting the 'defaultLocation' */
					
					if(!value.x || !value.y)		// if value is not = to x OR value is not = to y
						throw new Error('INVALID LOCATION!!!');	
					/*	'Error' is a built-in cinstructor that we use to create error object.
						So this is the benefit of the setter(validation)*/
				defaultLocation = value;
			}			
		} );
		//we have another method called Object.definePrperties, if you want to define multiple properties.
		//'get' is a keyword, for key value. and the value is 'function'.
		
		/*	So the 1st argument of this metg=hod is the object that we want to add a new property to. Now
			the object is one that is reference by 'this'(the 'circle' object),.
			
			2nd argument is the name of our property 'defaultLocation'.,.
			
			And the 3rd argument ia an object, in this object we add a key value pair, the key is 'get'
			and the value is 'function(){}' 
			
			So when we access 'circle.defaultLocation;' <- this function will be called */
	}
	
	const circle = new Circle(10);
	//Method 1
	console.log(circle.getDefaultLocation());	/*	So here we have to access to defaultLocation with
													'getDefaultLocation' function.	*/
	//Method  2
	//circle.defaultLocation = 0;			//but we should NOT be able to set this, We only read this.
	/*	Write below code on the console
			circle.defaultLocation
			circle	*/
			/*in 'circle' code we see that 'defaultLocation' property also added in 'Circle' function.
				We can see 'defaultLocation: (...)' that dot(...), because this is a computed property.
				 When we click on it, then that function is executed then there is the result, when we
				 expand that. */
			
			/*	And there is 'get defaultLocation' function is stored there as a Getter. So getter is a
				function that is used to read the property. */
			/*	So the property at the line 28 'defaultLocation' it refer to this as a Read Only Property.

				Now if you want to set the value of this property from the outside, we define a Setter.
				So in that object(line no.28) we add another key value pair. */
	circle.draw();
	circle.defaultLocation = 1;		//Gives our error.
	
	
/*RECAP
	use Object.defineProperty, to define Getters/Setters  */