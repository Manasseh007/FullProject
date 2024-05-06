package Numedic.VehicleTracking;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @PostMapping("/register")
    public ResponseEntity<String> registerVehicle(@RequestBody VehicleRequest vehicleRequest) {
        // Logic to register the vehicle
        // Save the vehicle details to the database

        return ResponseEntity.ok("Vehicle registered successfully");
    }

    @GetMapping("/{vehicleId}")
    public ResponseEntity<VehicleResponse> getVehicleDetails(@PathVariable String vehicleId) {
        // Logic to fetch vehicle details by vehicleId
        // Retrieve the vehicle details from the database

        VehicleResponse vehicleResponse = new VehicleResponse(vehicleId, "Toyota Camry", "Red");
        return ResponseEntity.ok(vehicleResponse);
    }
}
