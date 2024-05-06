var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
vehicleLocations.forEach(location => {
    L.marker([location.latitude, location.longitude]).addTo(map);
    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(`<b>Vehicle ID:</b> ${vehicle.vehicleID}<br><b>Make:</b> ${vehicle.make}<br><b>Model:</b> ${vehicle.model}<br><b>Registration Number:</b> ${vehicle.registrationNumber}`);

});
const processedVehicleData = results.map(vehicle => {
    return {
        id: vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        registrationNumber: vehicle.registrationNumber,
        location: {
            latitude: vehicle.latitude,
            longitude: vehicle.longitude
        }
    };
});

console.log('Processed vehicle data:', processedVehicleData);
// Sample vehicle locations array (replace with your actual data)
const vehicleLocations = [
    { latitude: -33.918861, longitude: 18.423300 },
    { latitude: -26.20227000, longitude: 28.04363000 }
    
];

// Loop through the vehicle locations array and add markers to the map
vehicleLocations.forEach(location => {
    L.marker([location.latitude, location.longitude]).addTo(map);
});

