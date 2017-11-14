package wasdev.sample.rest;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Application;

import wasdev.sample.Visitor;

@ApplicationPath("api")
@Path("/predictSource")
public class PredictionSourceAPI extends Application{

	/**
	 * 
	 * @return
	 */
	@GET
    @Path("/")
    @Produces({"application/json"})
    public String getPrediction() {
		
		Runtime runtime = Runtime.getRuntime();
		
		String test = "curl -X POST --header 'Content-Type: application/json' --header 'Accept: appliction/json' --header 'Authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImVjY2IyMTZiLTUwNWEtNGMxMy04YWIwLThlYTliNDNhZTE2NyIsImluc3RhbmNlSWQiOiJlY2NiMjE2Yi01MDVhLTRjMTMtOGFiMC04ZWE5YjQzYWUxNjciLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6IjJjMzIwMWI3LTgyMWEtNDY5Zi05MjU3LTE2ZmI1NjMwNTlhMCIsImlzcyI6Imh0dHA6Ly8xMjkuNDEuMjI5LjE4ODo4MDgwL3YyL2lkZW50aXR5IiwiaWF0IjoxNTEwNjEyMzk4LCJleHAiOjE1MTA2NDExOTh9.rgs6ah0oW69G72WN0cLeZyuHJ9zcDXE3QJbCsVcW3j2p7ZOjKLG4kRbmwiBI7y-ZEMEcAMc93ZRiDFqK5d4g-Hl9v0O_w38aNuJwbucMgJqyAHl1k149kahdT7JGtnHXUaDGF3g7mZwHl0I-pGzxtrAxg99aul7VjJ-tMPDv78BSdyN1g4DlYAz4Hn1zaKT2M9ZQkQLgJrvCH012Nbo-7hk1DGYlr7_DOo0Sx6jrwUb0tCt1tsjNmmd0v7IredciUbU0TLWizv5h2M6UhFSoQynlkmHVA6CNMX34UF4Puuod42_1pwEmItkZsQjjd0yyklXVXHOGPrtgXc413NvXpw' -d '{\"fields\": [\"Time\",\"Sub_metering_1\",\"Sub_metering_2\",\"Sub_metering_3\", \"Charge\"],\"values\": [[180400,0,37,16,6.6666667],[183500,0,27,17,3.333333333]]}' 'https://ibm-watson-ml.mybluemix.net/v3/wml_instances/eccb216b-505a-4c13-8ab0-8ea9b43ae167/published_models/658bf41e-47f0-4ab3-a2f6-644e75be0336/deployments/97231f7b-512d-4f80-a95f-24b580ce0136/online'";
		
		try {
		    Process process = runtime.exec(test);
		    int resultCode = process.waitFor();

		    if (resultCode == 0) {
		        return "Todo bien";
		    } 
		} catch (Throwable cause) {
	        return "Todo mal";
		}
		
		return "Nada";
		
	}
    
	@POST
    @Produces("application/text")
    @Consumes("application/json")
    public String getPredictionFromData(Visitor visitor) {
      
		return "Test post";
      
    }
	
}
