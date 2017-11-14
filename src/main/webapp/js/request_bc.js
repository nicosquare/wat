/* 
 * Blockchain related requests
 * */
	
	base_url_bc = 'http://148.100.5.171:3000';

// Query the stored energy of a house by its Id (address)

function getHousesStoredEnergy(houseAddress){
	
	var oReq = new XMLHttpRequest();
	var storedEnergy = 0;
    
    oReq.open('GET', base_url_bc+'/api/com.biz.House/'+houseAddress, false);
    
    oReq.onload = function(oEvent){
		
        if (oReq.status == 200){
            
			var jsonResponse = JSON.parse(oReq.responseText);

			storedEnergy = jsonResponse.storedPower;

        } else {
          
			alert("Problem with the request of stored power");
          
        }
    };
    
    oReq.send();
    
    return storedEnergy;
}

// Transfer energy from a house to another

function transferEnergy(from,to,energy){
	
	var oReq = new XMLHttpRequest();
	
	var data = JSON.stringify({"powerAmount": energy, "from": from, "to": to});
    
    oReq.open('POST', base_url_bc+'/api/com.biz.PowerTransfer', false);
    
	oReq.setRequestHeader("Content-type", "application/json");
    
    oReq.onload = function(oEvent){
		
        if (oReq.status == 200){
            
			var jsonResponse = JSON.parse(oReq.responseText);
			var transactionId = jsonResponse.transactionId;

        } else {
          
			alert("Problem with energy transfer");
          
        }
    };
    
    oReq.send(data);
}


// Send profile to company

function sendProfile(from,to,profileId){
	
	var oReq = new XMLHttpRequest();
	
	var data = JSON.stringify({"from": from, "to": to, "profile": "resource:com.biz.PowerProfile#"+profileId});
    
    oReq.open('POST', base_url_bc+'/api/com.biz.ProfileSend', false);
    
	oReq.setRequestHeader("Content-type", "application/json");
    
    oReq.onload = function(oEvent){
		
        if (oReq.status == 200){
            
			var jsonResponse = JSON.parse(oReq.responseText);
			var transactionId = jsonResponse.transactionId;

        } else {
          
			alert("Problem with profile sending");
          
        }
    };
    
    oReq.send(data);
}

// Return credit to client

function creditReturn(from,to,credit){
	
	var oReq = new XMLHttpRequest();
	
	var data = JSON.stringify({"from": from, "to": to, "creditAmount": credit});
    
    oReq.open('POST', base_url_bc+'/api/com.biz.CreditReturn', false);
    
	oReq.setRequestHeader("Content-type", "application/json");
    
    oReq.onload = function(oEvent){
		
        if (oReq.status == 200){
            
			var jsonResponse = JSON.parse(oReq.responseText);
			var transactionId = jsonResponse.transactionId;

        } else {
          
			alert("Problem with credit returning");
          
        }
    };
    
    oReq.send(data);
}
