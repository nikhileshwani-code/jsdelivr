// URL to make the fetch request to
const url = 'http://localhost:3000/dbquery?url=https://www.byteseal.in';

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
    // console.log(data.originalPiece);// Log the data to the console
    // console.log(data.replacePiece);
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


  function findAndReplace(findText, replaceText) {
    // Get the entire page content
    let pageContent = document.body.innerHTML;
    
    // Create a regular expression object, considering all occurrences and case-insensitivity
    let find = new RegExp(findText, 'gi');
    
    // Replace the found text with the replacement text
    let newContent = pageContent.replace(find, replaceText);
    
    // Update the page content
    document.body.innerHTML = newContent;
}

// Usage example:

for (var i=0;i<data.length;i++){

  findAndReplace(data[i].originalPiece, data[i].replacePiece);

}
