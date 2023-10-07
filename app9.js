const url = 'http://localhost:3000/show?url=https://www.byteseal.in';

// Making a GET request using the Fetch API
fetch(url)
  .then(response => {
    // Check if the response is OK (status 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json(); // Parse the response as text
  })
  .then(data => {
    console.log(data.searchParagraph); 
    console.log(data.replaceParagraph);// Log the data to the console
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
