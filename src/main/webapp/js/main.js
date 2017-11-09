$(document).ready(function() {
	
	// Initialize the demo
	
	init();
	
	
	// Energy animation of main house
	
	$("#zone-1").click(function() {

		if (!main_zones[0]) {
			
			if (!main_zones[1] && !main_zones[2]) {
				$("#house-principal").attr("src", "img/house_1_0_0.png");
			}
			if (!main_zones[1] && main_zones[2]) {
				$("#house-principal").attr("src", "img/house_1_0_3.png");
			}
			if (main_zones[1] && !main_zones[2]) {
				$("#house-principal").attr("src", "img/house_1_2_0.png");
			} else if (main_zones[1] && main_zones[2]) {
				$("#house-principal").attr("src", "img/house_1_2_3.png");
			}

			main_zones[0] = true;
			
		} else {

			if (!main_zones[1] && !main_zones[2]) {
				$("#house-principal").attr("src", "img/house_0_0_0.png");
			}
			if (!main_zones[1] && main_zones[2]) {
				$("#house-principal").attr("src", "img/house_0_0_3.png");
			}
			if (main_zones[1] && !main_zones[2]) {
				$("#house-principal").attr("src", "img/house_0_2_0.png");
			}
			if (main_zones[1] && main_zones[2]) {
				$("#house-principal").attr("src", "img/house_0_2_3.png");
			}

			main_zones[0] = false;

		}
		
		updateSliderZ1(main_zones[0]);

	})

	$("#zone-2").click(function() {

		if (!main_zones[1]) {

			if (!main_zones[0] && !main_zones[2]) {
				$("#house-principal").attr("src", "img/house_0_2_0.png");
			}
			if (!main_zones[0] && main_zones[2]) {
				$("#house-principal").attr("src", "img/house_0_2_3.png");
			}
			if (main_zones[0] && !main_zones[2]) {
				$("#house-principal").attr("src", "img/house_1_2_0.png");
			} else if (main_zones[0] && main_zones[2]) {
				$("#house-principal").attr("src", "img/house_1_2_3.png");
			}

			main_zones[1] = true;

		} else {

			if (!main_zones[0] && !main_zones[2]) {
				$("#house-principal").attr("src", "img/house_0_0_0.png");
			}
			if (!main_zones[0] && main_zones[2]) {
				$("#house-principal").attr("src", "img/house_0_0_3.png");
			}
			if (main_zones[0] && !main_zones[2]) {
				$("#house-principal").attr("src", "img/house_1_0_0.png");
			}
			if (main_zones[0] && main_zones[2]) {
				$("#house-principal").attr("src", "img/house_1_0_3.png");
			}

			main_zones[1] = false;

		}
		
		updateSliderZ2(main_zones[1]);

	})

	$("#zone-3").click(function() {

		if (!main_zones[2]) {

			if (!main_zones[1] && !main_zones[0]) {
				$("#house-principal").attr("src", "img/house_0_0_3.png");
			}
			if (!main_zones[1] && main_zones[0]) {
				$("#house-principal").attr("src", "img/house_1_0_3.png");
			}
			if (main_zones[1] && !main_zones[0]) {
				$("#house-principal").attr("src", "img/house_0_2_3.png");
			} else if (main_zones[1] && main_zones[0]) {
				$("#house-principal").attr("src", "img/house_1_2_3.png");
			}

			main_zones[2] = true;

		} else {

			if (!main_zones[1] && !main_zones[0]) {
				$("#house-principal").attr("src", "img/house_0_0_0.png");
			}
			if (!main_zones[1] && main_zones[0]) {
				$("#house-principal").attr("src", "img/house_1_0_0.png");
			}
			if (main_zones[1] && !main_zones[0]) {
				$("#house-principal").attr("src", "img/house_0_2_0.png");
			}
			if (main_zones[1] && main_zones[0]) {
				$("#house-principal").attr("src", "img/house_1_2_0.png");
			}

			main_zones[2] = false;

		}
		
		updateSliderZ3(main_zones[2]);

	})

	$("#button-send-energy").click(function() {

		$("#button-send-energy").attr("src", "img/send_energy_on.png");
		$("#house-alt").attr("src", "img/house_alt_on.png");

		updateHouseSlider();

		var timer = setTimeout(function() {

			$("#button-send-energy").attr("src", "img/send_energy_off.png");
			$("#house-alt").attr("src", "img/house_alt_off.png");

		}, 800);

	})

	$("#button-send-ibm").click(function() {

		$("#button-send-ibm").attr("src", "img/send_to_ibm_on.png");

		$('html, body').animate({
			scrollTop: $("#block-text-return").offset().top
		}, 800);

		var timer_1 = setTimeout(function() {

			$("#button-send-ibm").attr("src", "img/send_to_ibm_off.png");

		}, 800);

	})
	
	$("#button-return").click(function() {

		$("#button-return").attr("src", "img/return_on.png");

		$('html, body').animate({
			scrollTop: $("#container-info").offset().top
		}, 800);

		var timer = setTimeout(function() {

			$("#button-return").attr("src", "img/return_off.png");

		}, 800);

	})

});

// Function definition


// Initialization function
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
	
	var p_energy_h1 = 1;
	var p_energy_h2 = 0;
	
	energy_bar_house_p.animate(p_energy_h1);
	energy_bar_house_alt.animate(p_energy_h2);
	
	$("#energy-h1").text("100\n%");
	$("#energy-h2").text("0\n%");
	
}

function getHousesStoredEnergy(houseAddress){
	
	var oReq = new XMLHttpRequest();
	var storedEnergy = 0;
    
    oReq.open('GET', 'http://148.100.98.44:3000/api/com.biz.House/'+houseAddress, false);
    
    oReq.onload = function(oEvent){
		
        if (oReq.status == 200){
            
			var jsonResponse = JSON.parse(oReq.responseText);

			storedEnergy = jsonResponse.storedPower;

        } else {
          
			alert("Problem with the request");
          
        }
    };
    
    oReq.send();
    
    return storedEnergy;
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
	
	energy_bar_house_p.animate(0.8);
	energy_bar_house_alt.animate(0.2);
	
	$("#energy-h1").text("80\n%");
	$("#energy-h2").text("20\n%");
	
} 

// Misc

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


