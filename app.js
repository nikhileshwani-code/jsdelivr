document.getElementById("head").innerHTML='Hello world';
const apiUrl = 'https://www.boredapi.com/api/activity';

        // Get the element where we will display the result
        const resultElement = document.getElementById('result');

        // Use fetch to get data from the API
        fetch(apiUrl)
            .then(response => {
                // Check if the response is OK (status 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText);
                }
                return response.json(); // Parse the JSON from the response
            })
            .then(data => {
                // Use the parsed JSON data
                resultElement.textContent = data.activity; // Update the text content of our result element
            })
            .catch(error => {
                // Handle errors, like network issues
                console.error('There has been a problem with your fetch operation:', error);
                resultElement.textContent = 'Failed to fetch activity. Please try again later.';
            });


document.getElementById("head").innerHTML='Hello world';
const apiUrl = 'https://www.boredapi.com/api/activity';

        // Get the element where we will display the result
        const resultElement = document.getElementById('result');

        // Use fetch to get data from the API
        fetch(apiUrl)
            .then(response => {
                // Check if the response is OK (status 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText);
                }
                return response.json(); // Parse the JSON from the response
            })
            .then(data => {
                // Use the parsed JSON data
                resultElement.textContent = data.activity; // Update the text content of our result element
            })
            .catch(error => {
                // Handle errors, like network issues
                console.error('There has been a problem with your fetch operation:', error);
                resultElement.textContent = 'Failed to fetch activity. Please try again later.';
            });

// Fetch IP address from ipify API
fetch('https://api.ipify.org?format=json')
    .then(response => {
        // Check if response is ok (status 200-299)
        if(!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const ip = data.ip;
        // Use the IP to get location information from ip-api
        return fetch(`http://ip-api.com/json/${ip}`);
    })
    .then(response => {
        // Check if response is ok (status 200-299)
        if(!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Log the country and zip code
        console.log("Country:", data.country);
        console.log("Zip code:", data.zip);
    })
    .catch(error => {
        // Log any errors to the console
        console.error('There has been a problem with your fetch operation:', error);
    });
