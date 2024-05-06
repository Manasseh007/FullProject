package Numedic.VehicleTracking;

public class VehicleResponse {
    private String vehicleId;
    private String make;
    private String color;

    public VehicleResponse() {
    }

    public VehicleResponse(String vehicleId, String make, String color) {
        this.vehicleId = vehicleId;
        this.make = make;
        this.color = color;
    }

    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "VehicleResponse{" +
                "vehicleId='" + vehicleId + '\'' +
                ", make='" + make + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}
