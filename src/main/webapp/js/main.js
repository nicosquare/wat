$( document ).ready(function() {
	
	var main_zones = [false,false,false];
	
    
	$("#zone-1").click(function(){
		
		if(!main_zones[0]){
			
			if(!main_zones[1] && !main_zones[2]){
				$("#house-principal").attr("src","img/house_1_0_0.png");
			}
			if(!main_zones[1] && main_zones[2]){
				$("#house-principal").attr("src","img/house_1_0_3.png");
			} 
			if(main_zones[1] && !main_zones[2]){
				$("#house-principal").attr("src","img/house_1_2_0.png");
			} else
			if(main_zones[1] && main_zones[2]){
				$("#house-principal").attr("src","img/house_1_2_3.png");
			}
			
			main_zones[0] = true;
			
		}
		else {
			
			if(!main_zones[1] && !main_zones[2]){
				$("#house-principal").attr("src","img/house_0_0_0.png");
			}
			if(!main_zones[1] && main_zones[2]){
				$("#house-principal").attr("src","img/house_0_0_3.png");
			}
			if(main_zones[1] && !main_zones[2]){
				$("#house-principal").attr("src","img/house_0_2_0.png");
			}
			if(main_zones[1] && main_zones[2]){
				$("#house-principal").attr("src","img/house_0_2_3.png");
			}

			main_zones[0] = false;
			
		}
		
	})
	
	$("#zone-2").click(function(){
		
		if(!main_zones[1]){
			
			if(!main_zones[0] && !main_zones[2]){
				$("#house-principal").attr("src","img/house_0_2_0.png");
			}
			if(!main_zones[0] && main_zones[2]){
				$("#house-principal").attr("src","img/house_0_2_3.png");
			} 
			if(main_zones[0] && !main_zones[2]){
				$("#house-principal").attr("src","img/house_1_2_0.png");
			} else
			if(main_zones[0] && main_zones[2]){
				$("#house-principal").attr("src","img/house_1_2_3.png");
			}
			
			main_zones[1] = true;
			
		}
		else {
			
			if(!main_zones[0] && !main_zones[2]){
				$("#house-principal").attr("src","img/house_0_0_0.png");
			}
			if(!main_zones[0] && main_zones[2]){
				$("#house-principal").attr("src","img/house_0_0_3.png");
			}
			if(main_zones[0] && !main_zones[2]){
				$("#house-principal").attr("src","img/house_1_0_0.png");
			}
			if(main_zones[0] && main_zones[2]){
				$("#house-principal").attr("src","img/house_1_0_3.png");
			}

			main_zones[1] = false;
			
		}
		
	})
	
	$("#zone-3").click(function(){

		if(!main_zones[2]){
			
			if(!main_zones[1] && !main_zones[0]){
				$("#house-principal").attr("src","img/house_0_0_3.png");
			}
			if(!main_zones[1] && main_zones[0]){
				$("#house-principal").attr("src","img/house_1_0_3.png");
			} 
			if(main_zones[1] && !main_zones[0]){
				$("#house-principal").attr("src","img/house_0_2_3.png");
			} else
			if(main_zones[1] && main_zones[0]){
				$("#house-principal").attr("src","img/house_1_2_3.png");
			}
			
			main_zones[2] = true;
			
		}
		else {
			
			if(!main_zones[1] && !main_zones[0]){
				$("#house-principal").attr("src","img/house_0_0_0.png");
			}
			if(!main_zones[1] && main_zones[0]){
				$("#house-principal").attr("src","img/house_1_0_0.png");
			}
			if(main_zones[1] && !main_zones[0]){
				$("#house-principal").attr("src","img/house_0_2_0.png");
			}
			if(main_zones[1] && main_zones[0]){
				$("#house-principal").attr("src","img/house_1_2_0.png");
			}

			main_zones[2] = false;
			
		}
		
	})
	
	$("#button-send").click(function(){
		
		$("#button-send").attr("src","img/send_energy_on.png");
		$("#house-alt").attr("src","img/house_alt_on.png");
		
		var timer = setTimeout(function(){ 
			
			$("#button-send").attr("src","img/send_energy_off.png");
			$("#house-alt").attr("src","img/house_alt_off.png");
		
		}, 800); 
		
		
	})
	
	
});
