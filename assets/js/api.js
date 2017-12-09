// API for using the database

// Used to cache sent elements
var elementCache = [];

// TODO: implementation and adding more functions

/**
 * Returns all of the records from the database
 */
function getRecordAmount()
{
    return 0;
}

/**
 * Returns array containing record info *from*
 * elementCache.
 *
 * Arguments:
 *   - id: id of the record
 */
function getRecordByID(id)
{
    return elementCache[Number(id)];
}

/**
 * Sends a request to the database and saves
 * the results in the `elementCache` array.
 *
 * Arguments:
 *   - query: query to search. If null, then
 *            10 newest records will be given.
 */
function fetchQuery(query)
{
    if (query == null) query = "";
    
    var xhr = new XMLHttpRequest();
    
    
    xhr.onload = function(e)
    {
        var data = xhr.responseText;
        var parsed = JSON.parse(data);
        
        for (let i = 0; i < parsed.length; i++)
        {
            elementCache[Number(parsed[i].ID)] = parsed[i]; 
        }
        return parsed;
    }
    
    xhr.open("POST", "https://cernodile.com/api/ext/rosdb/fetch.php", true);
    xhr.send(JSON.stringify({"query": query}));
}

console.log("api.js initialized");
