//Abstraction
	//Private Properties and Methods
	function Circle(radius)
	{
		let color = 'red';		/*	Local Variable, it is not the property of the 'circle' object, because we
									can not use 'this' keyword. we didn't set like this -> this.color = color;
									So with this technic we can easily hide certain members from the otside */
		
		this.radius = radius;	//	'this' keyword poit to the 'circle' object, because we use 'new. keyword.
		
		//	instead of setting it as property on our object, We define it as Local Variable.
		let defaultLocation = {x: 0, y: 0};
		
		//Set this method also as private using 'let' keyword.	Convert this method to private method.
		let computeOptimumLocation = function(factor)
		{
			//...
			// This function may be call in only draw methiod
			console.log('Hellow computeOptimumLocation');
		}
		this.draw = function()
		{
			let x,y;
			computeOptimumLocation(0.1);	/*This function will no longer be a method on 'circle' object.
													So we can access it directly whithout 'this' keyword.
													This will work because i JS we this concept of "closur". */
											
			/*this.radius;						But if you access members of this "circle" object, then you
												need to use 'this' keyword.*/
			console.log('Hellow Draw');
		}
	}
	
	const circle = new Circle(10);
	console.log('radius: ',circle.radius);	/*	So the public interface of this object is simpler, is easier to work with
									and ths will also prevent issues later....	*/
	circle.draw();
	
/*Closure :- 
		So we have one function(Circle()) and another function(draw()) inside the "Circle()" function.
		So when we declare local variable in "draw()" then that local variables not accessible for "Circle()"
		or other outside function/method. Like - x and y variable.
		So when we execute the function, the x and y will go out of scope.
		
		In contrast to scope we have Closure. A closure determines what variables will accessible to an inner
		function. So this "draw()" function will able to access all the local variables defined here(draw()),
		as well as the variables defined in its Parent Function. 
*/
/*	Scope is temporary and it dies 
		So every time we call the draw methiod these variables(x,y) will be re-created and re-initialized and 
		after this function they will die. 
		
		But closure stays there, so when we call "draw()" function after we finished executing this function,
		these variables(color, defaultLocation and computeOptimumLocation) will continue to stay in memory.
		They will preserve their state. Because they are part of the closure of this "draw()" function. */