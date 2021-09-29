//Creating object
	//Factories
 /*
	 const circle = {
		 radius: 1,
		 location: {
			 c: 1,
			 y: 1
		 }

	 };
	  const circle = {
		 radius: 2,
		 location: {
			 c: 2,
			 y: 2
		 }
	 };
	 circle.draw();
 */
 // if object has one or more methods, we say that the object has Behavior
 // if onject has Behavior then the duplicate objects has issues.
	//then the soluton is  to use a Factory OR a Constructor function

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
	 circle.draw();