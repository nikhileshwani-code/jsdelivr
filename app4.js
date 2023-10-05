document.getElementById("head").innerHTML='Hello world';

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

    document.addEventListener("DOMContentLoaded", function() {
        function findAndReplace(searchText, replacementText) {
            // Get the page's HTML content
            let bodyText = document.body.innerHTML;
    
            // Use a regular expression to replace the text
            let searchExp = new RegExp(searchText, 'g'); // 'g' for global replacement
            let newText = bodyText.replace(searchExp, replacementText);
    
            // Update the page's HTML content
            document.body.innerHTML = newText;
        }
    
        // Usage example:
        findAndReplace('Protecting Personal and Organizational Data', 'Protecting Personal Data');
    });
    
