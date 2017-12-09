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
  const div = document.getElementById("search-results");
  const results = document.createElement("ul");
  div.innerHTML = "";
  div.appendChild(results);
  for (var key in json) {
    results.appendChild(createInfoElement("li", json[key]["APP_NAME"], json[key]["ID"]));
  }
}

console.log("info.js initialized");
