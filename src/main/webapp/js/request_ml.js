/* 
 * Machine Learning related requests
 * */
	
base_url_ml = './api/predictSource';
		
function getPredictionForMinute(time, sub_1, sub_2, sub_3, charge){
	
	var name = "Nico";
	
	
	//var fields = ["Time","Sub_metering_1","Sub_metering_2","Sub_metering_3", "Charge"];
	//var values = [[time, sub_1, sub_2, sub_3, charge]];

	var oReq = new XMLHttpRequest();	
	var data = JSON.stringify({name : name });
    
    oReq.open('POST', base_url_ml, false);
    
	oReq.setRequestHeader("Content-type", "application/json");
	
    oReq.onload = function(oEvent){
		
        if (oReq.status == 200){
            
			//var jsonResponse = JSON.parse(oReq.responseText);

			alert(oReq.responseText);

        } else {
          
			alert("Problem with prediction getting");
          
        }
    };
    
    oReq.send(data);
}

function testPredictionForMinute(){
	
	var oReq = new XMLHttpRequest();	
	
	oReq.open('GET', base_url_ml, false);
    
	oReq.setRequestHeader("Content-type", "application/json");
	
    oReq.onload = function(oEvent){
		
        if (oReq.status == 200){
            
			//var jsonResponse = JSON.parse(oReq.responseText);

			alert(oReq.responseText);

        } else {
          
			alert("Problem with prediction getting");
          
        }
    };
    
    oReq.send();
}
