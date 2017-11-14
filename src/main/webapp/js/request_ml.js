/* 
 * Machine Learning related requests
 * */
	
	base_url_ml = 'http://ibm-watson-ml.mybluemix.net/v3/wml_instances/eccb216b-505a-4c13-8ab0-8ea9b43ae167/published_models/658bf41e-47f0-4ab3-a2f6-644e75be0336/deployments/97231f7b-512d-4f80-a95f-24b580ce0136/online';
	wml_token = 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImVjY2IyMTZiLTUwNWEtNGMxMy04YWIwLThlYTliNDNhZTE2NyIsImluc3RhbmNlSWQiOiJlY2NiMjE2Yi01MDVhLTRjMTMtOGFiMC04ZWE5YjQzYWUxNjciLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6IjJjMzIwMWI3LTgyMWEtNDY5Zi05MjU3LTE2ZmI1NjMwNTlhMCIsImlzcyI6Imh0dHA6Ly8xMjkuNDEuMjI5LjE4ODo4MDgwL3YyL2lkZW50aXR5IiwiaWF0IjoxNTEwNjEyMzk4LCJleHAiOjE1MTA2NDExOTh9.rgs6ah0oW69G72WN0cLeZyuHJ9zcDXE3QJbCsVcW3j2p7ZOjKLG4kRbmwiBI7y-ZEMEcAMc93ZRiDFqK5d4g-Hl9v0O_w38aNuJwbucMgJqyAHl1k149kahdT7JGtnHXUaDGF3g7mZwHl0I-pGzxtrAxg99aul7VjJ-tMPDv78BSdyN1g4DlYAz4Hn1zaKT2M9ZQkQLgJrvCH012Nbo-7hk1DGYlr7_DOo0Sx6jrwUb0tCt1tsjNmmd0v7IredciUbU0TLWizv5h2M6UhFSoQynlkmHVA6CNMX34UF4Puuod42_1pwEmItkZsQjjd0yyklXVXHOGPrtgXc413NvXpw';

function getPredictionForMinute(time, sub_1, sub_2, sub_3, charge){
	
	var fields = ["Time","Sub_metering_1","Sub_metering_2","Sub_metering_3", "Charge"];
	var values = [[time, sub_1, sub_2, sub_3, charge]];

	var oReq = new XMLHttpRequest({mozSystem: true});	
	var data = JSON.stringify({"fields" : fields, "values" : values });
    
    oReq.open('POST', base_url_ml, false);
    
	oReq.setRequestHeader("Content-type", "text/plain");
	oReq.setRequestHeader("Accept", "text/plain");
	oReq.setRequestHeader("Authorization", wml_token);
	
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
