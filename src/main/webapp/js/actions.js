function actionDefinition(){
	
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

		transferEnergy("ADD_1","ADD_2",20);
		updateHouseSlider();

		var timer = setTimeout(function() {

			$("#button-send-energy").attr("src", "img/send_energy_off.png");
			$("#house-alt").attr("src", "img/house_alt_off.png");

		}, 800);

	})

	$("#button-send-ibm").click(function() {

		$("#button-send-ibm").attr("src", "img/send_to_ibm_on.png");

		sendProfile("ADD_1","ADDC_1","PROF_1");

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

	
}


