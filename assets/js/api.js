2// API for using the database

// Used to cache sent elements
var elementCache = [];

// TODO: implementation and adding more functions

/**
 * @function getRecordAmount
 * @author Mcpg
 * @example getRecordAmount();
 * @returns amount of the records *in the database*
 */
function getRecordAmount()
{
    return 0;
}

/**
 * @function getRecordByID
 * @author Mcpg
 * @param id ID of the cached record
 * @example getRecordById(1);
 * @returns record with ID 1
 */
function getRecordByID(id)
{
    if (id == null) return undefined;
    return elementCache[Number(id)];
}

/**
 * @function fetchQuery
 * @author Mcpg
 * @param query Query to search. If null, method will return 10 newest records
 * @example fetchQuery("Need for Speed");
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
