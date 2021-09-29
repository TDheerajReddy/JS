//Creating object
	

	function Circle(radius) {
		//instead of returning an object, we gona use 'this' keyword
		//console.log('this',this);
		this.radius = radius;
		this.draw = function() {
			console.log('Draw IT');
		}
	}
	const another = new Circle(1);
	
/*	functions are Objectin JS, it is confusing.
		Write below code in Console.
			
			Circle.name
			Circle.length		//number of the arguments
			
			
Every Object in JS has a constructor property and that references the function that was used to create an
object.

	Write on Console.
		Circle.constructor
		ƒ Function() { [native code] }

So here we have built-in constructor 'Function()'. Internally JS engine will use this 'Function()' constructor
to create this("Circle") object.

*/


/* So when we declare function, internally it's represented like this. */
const Circle1 = new Function('radius',`this.radius = radius;
		this.draw = function() {
			console.log('Draw IT');
		}
	`)
const circle = new Circle1(1);

/*	Write on Console.
		circle
*/

// Let's see few methods that available in our functions.
	/*	here we pass an empty object '{}' and 'this' will reference empty object'{}' that we pass. Then we pass
		the arguments
	*/	
		Circle.call({},1)

	/*This above expression is exactly like expression on line 12("const another = new Circle(1);").
		When we use the 'new' operator, this 'new' operator will internally create an empty object and pass them
		as the first argument to the call method. And this object'{}' will determine the context for 'this',and
		then 'this'	will reference this'{}' object.
		
		Earlier,if  you don't use the 'new' operator, then 'this' by default will point to the global object
		which is 'window'
			Circle.call(window,1)
	*/
	
	/*	it's exactly like the call method. but instead of passing all the arguments explicitly, we pass them 
		in an array.
	*/
	Circle.apply({},[1,2,3,4])
	/*	So this is useful, if you already have an array somewhere else in our application and you want to
		pass an array as second argument, to the 'apply' method.
	*/
	
	
	// So in JS Functions are Objects.
	