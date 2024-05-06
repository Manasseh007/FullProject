document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(this);
    const vehicleData = {};
    formData.forEach(function(value, key){
        vehicleData[key] = value;
    });

    // Send HTTP request to backend for registering vehicle
    // Replace 'backendURL' with actual backend API endpoint
    fetch('http://localhost:3000/vehicles', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vehicleData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Vehicle registered:', data);
        // Optionally, display success message or perform other actions
    })
    .catch(error => {
        console.error('Error registering vehicle:', error);
        // Optionally, display error message or perform other actions
    });
});

// JavaScript code to fetch vehicle data and integrate map view goes here

// Function to fetch vehicle data from the backend
function fetchVehicleData() {
    // Send HTTP request to backend to fetch vehicle data
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'jdbc:mysql://localhost:3306/VehicleTrackingSystem', 
        user: 'springstudent',
        password: 'springstudent',
        database: 'VehicleTrackingSystem'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL database');
    });

    connection.query('SELECT * FROM Vehicle', (err, results) => {
        if (err) {
            console.error('Error fetching vehicle data:', err);
            return;
        }
        console.log('Vehicle data:', results);
        // Process the fetched vehicle data as needed
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

        // Log the processed vehicle data
        console.log('Processed vehicle data:', processedVehicleData);

    });
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL connection:', err);
            return;
        }
        console.log('MySQL connection closed');
    });
    
    fetch('http://localhost:9293/api/vehicles')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Call function to display vehicle locations on the map
            displayVehicleLocations(data);
        })
        .catch(error => {
            console.error('Error fetching vehicle data:', error);
        });
}

// Function to display vehicle locations on the map
function displayVehicleLocations(vehicleData) {
    // Initialize Leaflet map
    const map = L.map('map').setView([51.505, -0.09], 13); // Set initial map center and zoom level

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Loop through vehicle data and add markers to the map
    vehicleData.forEach(vehicle => {
        // Extract latitude and longitude from vehicle data
        //const { latitude, longitude } = vehicle;

        // Each item in the array should contain latitude and longitude coordinates
        vehicleLocations.forEach(location => {
            L.marker([location.latitude, location.longitude]).addTo(map);
        });

        // Create marker with popup containing vehicle details
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(`<b>Vehicle ID:</b> ${vehicle.vehicleID}<br><b>Make:</b> ${vehicle.make}<br><b>Model:</b> ${vehicle.model}<br><b>Registration Number:</b> ${vehicle.registrationNumber}`);
    });
}

// Call function to fetch vehicle data and display locations on map when the page loads
window.onload = function() {
    fetchVehicleData();
};
