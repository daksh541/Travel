    function showPlaceDetails(place) {
        const details = {
            'Paris': {
                activities: ['Eiffel Tower visit', 'Seine River cruise', 'Louvre Museum'],
                costs: [200, 100, 150],
                flightCost: 500,
                hotels: [
                    { name: 'Hotel Parisian Bliss', cost: 200 },
                    { name: 'Louvre Stay', cost: 250 },
                ],
            },
            'Tokyo': {
                activities: ['Tokyo Tower', 'Cherry Blossom tour', 'Shibuya Crossing'],
                costs: [180, 120, 80],
                flightCost: 600,
                hotels: [
                    { name: 'Tokyo Central Inn', cost: 150 },
                    { name: 'Shibuya Sky Suites', cost: 300 },
                ],
            },
            'Maldives': {
                activities: ['Scuba diving', 'Beachside dinner', 'Island hopping'],
                costs: [300, 250, 200],
                flightCost: 800,
                hotels: [
                    { name: 'Maldives Beach Resort', cost: 400 },
                    { name: 'Island Paradise Hotel', cost: 500 },
                ],
            },
            'London': {
                activities: ['London Eye', 'Buckingham Palace tour', 'Thames River cruise'],
                costs: [150, 200, 120],
                flightCost: 550,
                hotels: [
                    { name: 'The London Luxe', cost: 300 },
                    { name: 'Thames View Inn', cost: 220 },
                ],
                image: "c:\Users\Hp\OneDrive\WEB\London.jpeg"
            },
            'New York': {
                activities: ['Statue of Liberty tour', 'Central Park stroll', 'Broadway Show'],
                costs: [180, 50, 200],
                flightCost: 700,
                hotels: [
                    { name: 'Manhattan Suites', cost: 350 },
                    { name: 'Times Square Hotel', cost: 400 },
                ],
            },
            'Dubai': {
                activities: ['Desert Safari', 'Burj Khalifa visit', 'Dubai Marina cruise'],
                costs: [250, 180, 100],
                flightCost: 450,
                hotels: [
                    { name: 'Dubai Luxury Stay', cost: 500 },
                    { name: 'Palm Island Resort', cost: 600 },
                ],
            },
            'Rome': {
                activities: ['Colosseum tour', 'Vatican City visit', 'Trevi Fountain'],
                costs: [150, 100, 50],
                flightCost: 400,
                hotels: [
                    { name: 'Roman Heritage Inn', cost: 200 },
                    { name: 'Piazza Deluxe Stay', cost: 250 },
                ],
            },
            'Sydney': {
                activities: ['Sydney Opera House', 'Harbour Bridge climb', 'Bondi Beach'],
                costs: [200, 150, 80],
                flightCost: 850,
                hotels: [
                    { name: 'Sydney Harbour Hotel', cost: 300 },
                    { name: 'Bondi Beach Retreat', cost: 350 },
                ],
            },
            'Bangkok': {
                activities: ['Grand Palace tour', 'Floating Market', 'Temple visit'],
                costs: [50, 40, 30],
                flightCost: 300,
                hotels: [
                    { name: 'Bangkok City Inn', cost: 100 },
                    { name: 'Siam Square Hotel', cost: 150 },
                ],
            },
            'Cape Town': {
                activities: ['Table Mountain hike', 'Cape Point tour', 'Winelands visit'],
                costs: [100, 80, 120],
                flightCost: 600,
                hotels: [
                    { name: 'Cape Town Panorama', cost: 180 },
                    { name: 'Vineyard Luxury Stay', cost: 250 },
                ],
            },
            'Rio de Janeiro': {
                activities: ['Table Mountain hike', 'Cape Point tour', 'Winelands visit'],
                costs: [100, 80, 120],
                flightCost: 600,
                hotels: [
                    { name: 'Rio de Janeiro Panorama', cost: 180 },
                    { name: 'Vineyard Luxury Stay', cost: 250 },
                ],
            },
            'Istanbul': {
                activities: ['Table Mountain hike', 'Cape Point tour', 'Winelands visit'],
                costs: [100, 80, 120],
                flightCost: 600,
                hotels: [
                    { name: 'Istanbul Panorama', cost: 180 },
                    { name: 'Vineyard Luxury Stay', cost: 250 },
                ],
            },
        };

        const destinationDetails = details[place];
        if (destinationDetails) {
            let detailsHTML = `
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.7);
                        position: relative;
                    }
                    .details-container {
                        position: relative;
                        background-color: rgba(255, 255, 255, 0.8);
                        padding: 20px;
                        border-radius: 8px;
                        max-width: 600px;
                        text-align: center;
                        z-index: 2;  /* Ensure content is above the image */
                        position: relative;
                    }
                    .details-container h1, .details-container h2, .details-container h3 {
                        margin: 10px 0;
                    }
                    .details-container ul {
                        list-style-type: none;
                        padding: 0;
                    }
                    .details-container li {
                        margin: 5px 0;
                    }
                    .close-btn {
                        background-color: #333;
                        color: white;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 10px;
                        z-index: 2;
                    }
                </style>

                <div class="details-container">
                    <h1>${place} Package Details</h1>
                    <h2>Flight Cost: $${destinationDetails.flightCost}</h2>
                    <h3>Activities:</h3>
                    <ul>`;
            
                    let totalCost = destinationDetails.flightCost;

                    destinationDetails.activities.forEach((activity, index) => {
                        detailsHTML += `<li>${activity} - $${destinationDetails.costs[index]}</li>`;
                        totalCost += destinationDetails.costs[index];
                    });
            
                    detailsHTML += `</ul><h3>Hotels:</h3><ul>`;
            
                    destinationDetails.hotels.forEach((hotel) => {
                        detailsHTML += `<li>${hotel.name} - $${hotel.cost} per night</li>`;
                        totalCost += hotel.cost;
                    });
            
                    detailsHTML += `</ul><h3>Total Cost Breakdown:</h3><ul>`;
            
                    detailsHTML += `<li>Flight: $${destinationDetails.flightCost}</li>`;
                    destinationDetails.activities.forEach((activity, index) => {
                        detailsHTML += `<li>${activity}: $${destinationDetails.costs[index]}</li>`;
                    });
            
                    destinationDetails.hotels.forEach((hotel) => {
                        detailsHTML += `<li>Hotel (${hotel.name}): $${hotel.cost}</li>`;
                    });
            
                    detailsHTML += `<li><strong>Total Estimated Cost: $${totalCost}</strong></li></ul></div>`;
            
                    const newWindow = window.open('', '_blank');
                    newWindow.document.write(`<!DOCTYPE html><html><head><title>${place} Details</title></head><body>${detailsHTML}</body></html>`);
                    newWindow.document.close();
                } else {
                    alert('No details available for this destination.');
                }
            }


    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Thank you, ${name}! We will get back to you at ${email}.`);
        document.getElementById('contactForm').reset();
    });
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
    });
