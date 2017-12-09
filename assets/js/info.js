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
  element.innerHTML = element.innerHTMl + content;
  element.id = "infoElement";
  if (id) element.id = element.id + "-" + id;
  return element;
}

console.log("info.js initialized");
