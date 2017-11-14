/* 
 * OnReady Demo function
 * */

$(document).ready(function() {
	
	// Initialize the demo variables
	
	init();
	
	// Initialize actions on demo
	
	actionDefinition();

	// Test ML
	
	//getPredictionForMinute('180400', '0', '37', '16', '6.6666667');

	// Test DB
	
	getAverageFromMinute("3600");

});
