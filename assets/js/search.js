/*global fetchQuery*/
// Searching function

document.addEventListener("DOMContentLoaded", function()
{
    // Get the elements
    var searchButton = document.getElementById("search-button");
    var searchBox = document.getElementById("search-box");
    var formContainer = document.getElementById("form");
    
    if (searchButton == null || searchBox == null || formContainer == null)
    {
        // Site is for whatever reason incomplete, so we're doing nothing.
        return;
    }
    
    // Inits the search after pressing Search or Enter.
    function initSearch()
    {
        // Get the text from the search input
        let searchedText = searchBox.value;
        
        if (searchedText == null || searchedText.length == 0)
        {
            return;
        }
        console.log("Searching for `" + searchedText + "`");
        fetchQuery(searchedText, true);
        
        document.getElementById("search-results-header").style.display = "inline-block";
    }
    
    // Register click event for the Search button
    searchButton.addEventListener("click", initSearch, false);
    
    // Pressing enter submits the form
    formContainer.addEventListener('keypress', (event) =>
    {
      if (event.key == "Enter")
      {
          initSearch();
      }
    });
});

console.log("search.js initialized");
