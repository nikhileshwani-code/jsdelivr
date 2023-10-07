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
findAndReplace('Password-free', 'worryless');
