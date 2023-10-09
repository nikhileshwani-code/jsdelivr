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
    console.log(data.country_name);
    const country=data.country_name;
    console.log(data.postal);
    const zip=data.postal;
    console.log('http://localhost:3000/dbquery?url=https://www.byteseal.in&country='+country+'&zip='+zip);
    fetch('http://localhost:3000/dbquery?url=https://www.byteseal.in&country='+country+'&zip='+zip)
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

      findAndReplace(data[i].originalPiece, data[i].replacePiece);
    
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
