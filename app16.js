const urlip='https://api.ipify.org?format=json';

fetch(urlip)
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
    console.log(data.ip);
    const ip=data.ip;
    fetch('https://ipapi.co/'+ip+'/json/')
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
    console.log(data.country);
    const country=data.country_name;
    console.log(data.zip);
    const zip=data.postal;
    console.log('http://localhost:3000/dbquery?url=https://www.byteseal.in&country='+country+'&zip='+zip);
    fetch('http://localhost:3000/dbquery?url=https://www.byteseal.in&country='+country)
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
    for (var i=0;i<data.length;i++){  
      if(data[i].isImage=="Yes"){
        console.log("image is true");
        ChangeImageSrc(data[i].originalPiece, data[i].replacePiece);
      }
      else{
        findAndReplace(data[i].originalPiece, data[i].replacePiece);
      }
    }
    
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

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

function changeImageSrc(oldSrc, newSrc) {
  // Select all image elements
  var images = document.querySelectorAll('img');

  // Loop through all images
  for (var i = 0; i < images.length; i++) {
      // Check if the image src matches the oldSrc parameter
      if (images[i].src == oldSrc) {
          // Change the src of the image to newSrc
          images[i].src = newSrc;
          break;  // Remove this line if you want to change all matching images
      }
  }
}
