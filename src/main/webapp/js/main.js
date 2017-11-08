$(document).ready(function() {

	// Initialize the demo
	init();
	
	// Energy consumumption by zones (Boolean) 
	
	var main_zones = [ false, false, false ];
	
	
	// Energy consumption bars initialization
	
	var energy_bar_z1 = new ProgressBar.Line('#energy-bar-z1', {
		strokeWidth: 2,
		color: '#eef442'
	});
	
	var energy_bar_z2 = new ProgressBar.Line('#energy-bar-z2', {
		strokeWidth: 2,
		color: '#62a2a3'
	});
	
	var energy_bar_z3 = new ProgressBar.Line('#energy-bar-z3', {
		strokeWidth: 2,
		color: '#cfd3dc'
	});
	
	var energy_bar_house_p = new ProgressBar.Line('#energy-bar-house-p', {
		strokeWidth: 2,
		color: '#eef442'
	});
	
	var energy_bar_house_alt = new ProgressBar.Line('#energy-bar-house-alt', {
		strokeWidth: 2,
		color: '#eef442'
	});
	
	energy_bar_z1.animate(0.4);
	energy_bar_z2.animate(0.15);
	energy_bar_z3.animate(0.2);
	energy_bar_house_p.animate(0.5);
	energy_bar_house_alt.animate(0.5);
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

	})

	$("#button-send-energy").click(function() {

		$("#button-send-energy").attr("src", "img/send_energy_on.png");
		$("#house-alt").attr("src", "img/house_alt_on.png");

		var timer = setTimeout(function() {

			$("#button-send-energy").attr("src", "img/send_energy_off.png");
			$("#house-alt").attr("src", "img/house_alt_off.png");

		}, 800);

	})

	$("#button-send-ibm").click(function() {

		$("#button-send-ibm").attr("src", "img/send_to_ibm_on.png");

		var timer_1 = setTimeout(function() {

			$("#button-send-ibm").attr("src", "img/send_to_ibm_off.png");

		}, 800);

	})
	
	$("#button-return").click(function() {

		$("#button-return").attr("src", "img/return_on.png");

		var timer = setTimeout(function() {

			$("#button-return").attr("src", "img/return_off.png");

		}, 800);

	})

});

function init(){
	
	// Init the plugin for Map resizing
	$('map').imageMapResize();
}
