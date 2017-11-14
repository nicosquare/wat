function init(){
	
	$("#from-panel").hide();
	$("#from-grid").show();
	
	// Global variables
	
	vprediction_zones = [0,0,0]; // KW - Z1 - Z2 - Z3
	consumption_zones = [0,0,0]; // KW - Z1 - Z2 - Z3
	stored_power = [0,0]; // KW - H1 - H2
	consumed_by_zone = [0,0,0];
	
	
	// Energy consumumption by zones (Boolean)
	
	main_zones = [ false, false, false ];
	
	
	// Energy consumption bars initialization
	
	energy_bar_z1 = new ProgressBar.Line('#energy-bar-z1', {
		strokeWidth: 3,
		color: '#eef442'
	});
	
	energy_bar_z2 = new ProgressBar.Line('#energy-bar-z2', {
		strokeWidth: 3,
		color: '#62a2a3'
	});
	
	energy_bar_z3 = new ProgressBar.Line('#energy-bar-z3', {
		strokeWidth: 3,
		color: '#cfd3dc'
	});
	
	energy_bar_house_p = new ProgressBar.Line('#energy-bar-house-p', {
		strokeWidth: 12,
		color: '#eef442'
	});
	
	energy_bar_house_alt = new ProgressBar.Line('#energy-bar-house-alt', {
		strokeWidth: 12,
		color: '#eef442'
	});
	
	// Intervals
	
	var intervalZ1;
	var intervalZ2;
	var intervalZ3;
	
	// Init the plugin for Map resizing
	$('map').imageMapResize();
	
	// Update timer
	
	$("#pred-time").text(formatAMPM());
	
	var intervalClock = setInterval(() => {
		$("#pred-time").text(formatAMPM());
	}, 60000);
	
	var intervalClockPlus6;
	
	var clockTimeout = setInterval(function(){
	
		clearInterval(intervalClock);
		
		intervalClockPlus6 = setInterval(() => {
			$("#pred-time").text(formatAMPMPlus6());
			$("#from-panel").show();
			$("#from-grid").hide();
		}, 17000);
		
	});
	
	
	// Update prediction values
	
	prediction_zones = [2033,4187,13341];
	
	// Update values of stored energy
	
	consumption_zones = [10000,3000];

	// Update sliders with correct value
	
	// Zones
	
	var p_energy_z1 = percentCalculation(consumed_by_zone[0],prediction_zones[0]);
	var p_energy_z2 = percentCalculation(consumed_by_zone[1],prediction_zones[1]);
	var p_energy_z3 = percentCalculation(consumed_by_zone[2],prediction_zones[2]);
	
	energy_bar_z1.animate(p_energy_z1);
	energy_bar_z2.animate(p_energy_z2);
	energy_bar_z3.animate(p_energy_z3);
	
	$("#text-bar-z1").text(p_energy_z1+" %");
	$("#text-bar-z2").text(p_energy_z2+" %");
	$("#text-bar-z3").text(p_energy_z3+" %");
	
	// House
	
	stored_power[0] = getHousesStoredEnergy("ADD_1");
	stored_power[1] = getHousesStoredEnergy("ADD_2");
	
	var p_energy_h1 = stored_power[0]/100;
	var p_energy_h2 = stored_power[1]/100;
	
	energy_bar_house_p.animate(p_energy_h1);
	energy_bar_house_alt.animate(p_energy_h2);
	
	$("#energy-h1").text(parseFloat(p_energy_h1*100).toFixed(2)+"\n%");
	$("#energy-h2").text(parseFloat(p_energy_h2*100).toFixed(2)+"\n%");
	
}

