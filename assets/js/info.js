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
 * @function infoFromRawData
 * @author cernodile
 * @param json object The json or array
 **/
function infoFromRawData (json) {
  // Assuming this is normal data with 2 results
  for (var key in json) {
    const results = document.createElement("ul");
    const div = document.getElementById("search-results");
    div.innerHTML = "";
    div.appendChild(results);
    results.appendChild(createInfoElement("li", json[key]["APP_NAME"], json[key]["ID"]);
  }
}

console.log("info.js initialized");
