
function formatAMPM() {

	var d = new Date(),
	minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes();
	hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
	ampm = d.getHours() >= 12 ? 'pm' : 'am';
	
	return "Wed. "+hours+':'+minutes+" "+ampm;
}

function percentCalculation(a, b){
  var c = (parseFloat(a)/parseFloat(b));
  return parseFloat(c).toFixed(3);
}

function formatAMPMPlus6() {
	
	var d1 = new Date();
	var d2 = new Date(d1);
	d2.setHours ( d1.getHours() + 6 ),
	minutes = d2.getMinutes().toString().length == 1 ? '0'+d2.getMinutes() : d2.getMinutes();
	hours = d2.getHours().toString().length == 1 ? '0'+d2.getHours() : d2.getHours();
	ampm = d2.getHours() >= 12 ? 'pm' : 'am';
	
	return "Wed. "+hours+':'+minutes+" "+ampm;
}


// Update sliders

function updateSliderZ1(onoff){
	
	if(onoff){
		
		intervalZ1 = setInterval(function(){
			
			consumed_by_zone[0] += 2;
			
			var p_energy_z1 = percentCalculation(consumed_by_zone[0],prediction_zones[0]);
			
			energy_bar_z1.animate(p_energy_z1);
			
			$("#text-bar-z1").text(p_energy_z1+" %");
			
		},1000); 
		
	}
	else clearInterval(intervalZ1);
	
}

function updateSliderZ2(onoff){
	
	if(onoff){
		
		intervalZ2 = setInterval(function(){
			
			consumed_by_zone[1] += 4;
			
			var p_energy_z2 = percentCalculation(consumed_by_zone[1],prediction_zones[1]);
			
			energy_bar_z2.animate(p_energy_z2);
			
			$("#text-bar-z2").text(p_energy_z2+" %");
			
		},1000); 
		
	}
	else clearInterval(intervalZ2);
	
}

function updateSliderZ3(onoff){
	
	if(onoff){
		
		intervalZ3 = setInterval(function(){
			
			consumed_by_zone[2] += 13;
			
			var p_energy_z3 = percentCalculation(consumed_by_zone[2],prediction_zones[2]);
			
			energy_bar_z3.animate(p_energy_z3);
			
			$("#text-bar-z3").text(p_energy_z3+" %");
			
		},1000); 
		
	}
	else clearInterval(intervalZ3);
	
}

function updateHouseSlider(){
	
	var newStoredEnergyH1 = getHousesStoredEnergy("ADD_1");
	var newStoredEnergyH2 = getHousesStoredEnergy("ADD_2");
	
	var perEnergyH1 = percentCalculation(newStoredEnergyH1,100);
	var perEnergyH2 = percentCalculation(newStoredEnergyH2,100);
	
	energy_bar_house_p.animate(perEnergyH1);
	energy_bar_house_alt.animate(perEnergyH2);
	
	$("#energy-h1").text(parseFloat(perEnergyH1*100).toFixed(2)+"\n%");
	$("#energy-h2").text(parseFloat(perEnergyH2*100).toFixed(2)+"\n%");
	
} 
