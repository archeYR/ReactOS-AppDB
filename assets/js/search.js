// Searching function

document.addEventListener("DOMContentLoaded", function()
{
    // Get the elements
    var searchButton = document.getElementById("search-button");
    var searchBox = document.getElementById("search-box");
    
    if (searchButton == null || searchBox == null)
    {
        // Site is for whatever reason incomplete, so we're doing nothing.
        return;
    }
    
    // Register click event for the Search button
    searchButton.addEventListener("click", function()
    {
        // Get the text from the search input
        let searchedText = searchBox.value;
        
        if (searchedText == null || searchedText.length == 0)
        {
            return;
        }
        
        console.log("Searching for `" + searchedText + "`");
    }, false);
});

console.log("search.js initialized");
