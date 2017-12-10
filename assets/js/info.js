/**
 * @function createInfoElement
 * @author cernodile
 * @param tag string The type of element created, e.g. li, ul, div, etc
 * @param content string Contents of the info element (may contain HTML)
 * @param id string The ID to use for element. Format will be infoElement-id
 * @example createInfoElement("div", "Some information", "hello");
 * @returns <div id="infoElement-hello">Some information</div>
 **/
function createInfoElement (tag, content, id) {
  var element = document.createElement(tag);
  element.innerHTML = content;
  element.id = "infoElement";
  if (id) element.id = element.id + "-" + id;
  return element;
}

/**
 * @function numberToRating
 * @author Mcpg
 * @param number to convert
 * @example numberToRating(3);
 * @returns Garbage, Bronze, Silver, Gold, or Platinum.
 **/
function numberToRating(number)
{
    // if the number is for whatever reason a string or something, convert it.
    number = Number(number);
    
    switch(number)
    {
        case 1:
            return "Garbage";
        case 2:
            return "Bronze";
        case 3:
            return "Silver";
        case 4:
            return "Gold";
        case 5:
            return "Platinum";
        default:
            return "Unknown rating";    
    }
}

/**
 * @function createBasicInfoElement
 * @author Mcpg
 * @param tag string Type of the element, e.g. li, span, etc.
 * @param name string Name of the application's property (will be bolded and suffixed with `: `). May contain HTML.
 * @param content string Content of the parameter. If null, then the returned element will be an empty text node.
 * @example createBasicInfoElement("li", "My name", "Mcpg");
 * @returns <li><strong>My name: </strong> Mcpg</li>
 */
function createBasicInfoElement(tag, name, content)
{
    if (content == null) return document.createTextNode("");    
    
    var element = document.createElement(tag);
    var bolded = document.createElement("strong");
    bolded.innerHTML = name + ": ";
    element.appendChild(bolded);
    element.innerHTML += content;
    return element;
}

/**
 * @function createTextAreaInfoElement
 * @author Mcpg
 * @param name string Name of the text area. It will be display bolded above the <textarea>
 * @param content string Content of the textarea. If null, then the method will return empty text node.
 * @example createBasicInfoElement("What wasn't tested", "Printing image");
 * @returns <div><strong>What wasn't teted:</strong><br /><textarea readonly=\"readonly\">Printing image</textarea></div>
 */
function createTextAreaInfoElement(name, content)
{
    if (content == null) return document.createTextNode("");
    
    var root = document.createElement("div");
    root.className = "application-comment";
    
    var strong = document.createElement("strong");
    strong.innerHTML = name + ":";
    root.appendChild(strong);
    root.appendChild(document.createElement("br"));
    
    var textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", "readonly");
    textarea.setAttribute("cols", "70");
    textarea.setAttribute("rows", "4");
    textarea.innerHTML = content;
    
    root.appendChild(textarea);
    return root;
}

/**
 * @function infoFromRawData
 * @author cernodile & Mcpg
 * @param json object The json or array
 **/
function infoFromRawData (json) {
  // Assuming this is normal data with 2 results
  const div = document.getElementById("search-results");
  const results = document.createElement("ul");
  div.innerHTML = "";
  div.appendChild(results);
  for (var key in json) {
    let element = createInfoElement("li", "<a href=\"#\">" + json[key]["APP_NAME"] + "</a>", json[key]["ID"]);
    
    element.setAttribute("db-id", json[key]["ID"]);
    
    element.addEventListener("click", function()
    {
        if (!element.hasAttribute("db-id")) return;
        putIntoAppDetails(elementCache[Number(element.getAttribute("db-id"))]);
    });
    
    results.appendChild(element);
  }
}

/**
 * @function putIntoAppDetails
 * @author Mcpg
 * @param raw raw JSON array containing application info
 * @example putIntoAppDetails(getRecordByID(1));
 */
function putIntoAppDetails(raw)
{
    // TODO: putting text-areas (what works, what doesn't, what wasn't tested and additional comments)
    document.getElementById("application-info-header").innerHTML = "Info for " + raw.APP_NAME;    
    
    const div = document.getElementById("application-info");
    const basicInfo = document.createElement("ul");
    
    div.style.display = "block";
    div.innerHTML = "";
    
    div.appendChild(basicInfo);
    
    basicInfo.appendChild(createBasicInfoElement("li", "Program name", raw.APP_NAME));
    basicInfo.appendChild(createBasicInfoElement("li", "Program version", raw.APP_VERSION));
    basicInfo.appendChild(createBasicInfoElement("li", "Program author", raw.APP_AUTHOR));
    basicInfo.appendChild(createBasicInfoElement("li", "Tester", "<a href=\"https://github.com/" + raw.APP_TESTER + "\" title=\"" + raw.APP_TESTER + "\">" + raw.APP_TESTER + "</a>"));
    basicInfo.appendChild(createBasicInfoElement("li", "Program URL", raw.APP_URL));
    basicInfo.appendChild(createBasicInfoElement("li", "Test publishing time", raw.DATE));
    basicInfo.appendChild(createBasicInfoElement("li", "Rating", numberToRating(raw.EDITOR_RATING)));
    basicInfo.appendChild(createBasicInfoElement("li", "ReactOS version", raw.ROS_VERSION));
    
    div.appendChild(createTextAreaInfoElement("What works", raw.COMMENT_WORK));
    div.appendChild(createTextAreaInfoElement("What doesn't work", raw.COMMENT_NOT_WORK));
    div.appendChild(createTextAreaInfoElement("What wasn't tested", raw.COMMENT_NOT_TESTED));
    div.appendChild(createTextAreaInfoElement("Additional comments", raw.COMMENT_ADDITIONAL_INFO));
}

console.log("info.js initialized");
