        document.addEventListener("DOMContentLoaded", function() {
            // Modify the content as soon as the DOM is ready
           let pageContent = document.body.innerHTML;
    
    // Create a regular expression object, considering all occurrences and case-insensitivity
    let find = new RegExp("Password", 'gi');
    
    // Replace the found text with the replacement text
    let newContent = pageContent.replace(find, "worry");
        });
