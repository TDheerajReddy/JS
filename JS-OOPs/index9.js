//Values v/s Reference Types Example 2
	
	/*	In JS We have 2 categories of types.
		1.Value Types/Primitive Types		2.Reference Types
		
			1.Value Types/Primitive Types:- 
				Number
				String
				Boolean
				Symbol(new in ES6)
				undefined
				null
		
			2.Reference Types
				Objects
				Functions
				Arrays	
	*/
//PRIMITIVE TYPES
	let number = 10;
	function increase(number)
	{
		number++;
		/*	When we pass 'number' variable from 'increase(number)' call, then this function parameter copy
			that value, this function parameter is local. So the number variable at the top completely
			independent of this parameter number variable.
		*/
		return number;
	}
	increase(number);
	console.log('Global number : ',+number);	//upper comment is for this line
	
	// if the function is not return the value then the value is undefined
	console.log('Returned Value : ',+increase(number));
	
	
//REFERENCE TYPES
	let obj = { value: 10};
	function increament(obj)
	{
		obj.value++;
		/*	
		*/
		return obj;
	}
	/*	It pass by reference/address, so that local parameter, that is also point to that same
		address/object as we define up there.
		We have two variables that are pointing to the same object.
		So any changes we make to this object will visible to the other variable.
	*/
	increament(obj); 	// First Call - 11
	console.log(obj);
	
	console.log(increament(obj));		//Second Call - 12

//CONCLUSION :- 
/*	Primitives are copied by their value.
	Objects are copied their reference/address.
*/