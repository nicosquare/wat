package wasdev.sample;

public class DataRegister {

	private String time;
	private String subMetering1;
	private String subMetering2;
	private String subMetering3;
	private String charge;

	public DataRegister() {
		time = "";
		subMetering1 = "";
		subMetering2 = "";
		subMetering3 = "";
		charge = "";
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getSubMetering1() {
		return subMetering1;
	}

	public void setSubMetering1(String subMetering1) {
		this.subMetering1 = subMetering1;
	}

	public String getSubMetering2() {
		return subMetering2;
	}

	public void setSubMetering2(String subMetering2) {
		this.subMetering2 = subMetering2;
	}

	public String getSubMetering3() {
		return subMetering3;
	}

	public void setSubMetering3(String subMetering3) {
		this.subMetering3 = subMetering3;
	}

	public String getCharge() {
		return charge;
	}

	public void setCharge(String charge) {
		this.charge = charge;
	}
	
	
	
}

