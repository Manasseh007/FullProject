package Numedic.VehicleTracking;

public class VehicleRequest {
    private String registrationNumber;
    private String make;
    private String model;

    public VehicleRequest() {
    }

    public VehicleRequest(String registrationNumber, String make, String model) {
        this.registrationNumber = registrationNumber;
        this.make = make;
        this.model = model;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @Override
    public String toString() {
        return "VehicleRequest{" +
                "registrationNumber='" + registrationNumber + '\'' +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                '}';
    }
}
