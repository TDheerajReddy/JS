//EXERCISE/PRACTICE
/*	On console
		const sw = new Stopwatch();
		sw.duration		//Property
		sw.reset()		//methods
		sw.start()		//methods	// We can not call twice
		sw.stop()		//methods	// We can not call twice
		
		sw.duration
*/

function Stopwatch()
{
	let startTime, endTime, running, duration = 0;
	this.start = function()
	{
		//If Stopwatch has already runnig
		if(running)
			throw new Error('STOPWATCH HAS ALREADY STARTED.');
		
		running=true;		// otherwise it set true 
		startTime= new Date();		// set 'startTime' to set current date time 
	};
	
	this.stop = function()
	{
		//if its not runnig
		if(!running)
			throw new Error('STOPWATCH IS NOT STARTED YET.');
			
		runnig=false;
		endTime = new Date();
		
	/*Calculate the seconds. that bracket expresion is returns the milliseconds b/w these two date objects.
		So divided by the 1000 to get the seconds. */
		const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
	
	//add the seconds to the duration variable. this works as like -> "duration= duration + seconds;"
		duration += seconds;
	};
	
	this.reset = function()
	{
			startTime = null;
			endTime = null;
			running = false;
			duration = 0;
	};
	
	Object.defineProperty(this, 'duration', 
	{
		get: function()
		{
			return duration;
		}
	});
}