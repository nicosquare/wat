/* 
 * Machine Learning related requests
 * */
	
	base_url_db = 'https://ec9e352f-3030-4865-aca5-dcb885147ce2-bluemix.cloudant.com/energy_profile/_find';
	auth_token = 'Basic ZWM5ZTM1MmYtMzAzMC00ODY1LWFjYTUtZGNiODg1MTQ3Y2UyLWJsdWVtaXg6NjNjNzFkOGZiNGUwMjg5MTc0OTg4M2NmNDhkMDM0ZGQyYmY5MjAzYmE0NTg4YTU5YTliZTIyNGE2ZmE5ZDk3NA==';

function getAverageFromMinute(minute){

	var oReq = new XMLHttpRequest({mozSystem: true});	
	var data = JSON.stringify({"selector" :  {"time": minute}});
    
    oReq.open('POST', base_url_db, false);
    
	oReq.setRequestHeader("Content-type", "application/json");
	oReq.setRequestHeader("Accept", "application/json");
	oReq.setRequestHeader("Authorization", auth_token);
	
    oReq.onload = function(oEvent){
		
        if (oReq.status == 200){
            
			var jsonResponse = JSON.parse(oReq.responseText);
			var transactionId = jsonResponse.transactionId;

			alert(jsonResponse.values[0][2]);

        } else {
          
			alert("Problem with prediction getting");
          
        }
    };
    
    oReq.send(data);
}
