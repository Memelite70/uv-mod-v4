"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }
function getRandomUpTo(max) {
 return Math.floor(Math.random() * Math.floor(max)) + 1;
}
  const domain = localStorage.getItem('domain');
  const servernode = localStorage.getItem('server-node');
  const url = search(address.value, searchEngine.value);
  location.href = '//' + servernode + domain + url;

});
"use strict";
/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL
 */
function search(input, template) {
  try {
    // input is a valid URL:
    // eg: https://example.com, https://example.com/test?q=param
    return new URL(input).toString();
  } catch (err) {
    // input was not a valid URL
  }

  try {
    // input is a valid URL when http:// is added to the start:
    // eg: example.com, https://example.com/test?q=param
    const url = new URL(`http://${input}`);
    // only if the hostname has a TLD/subdomain
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
    // input was not valid URL
  }

  // input may have been a valid URL, however the hostname was invalid

  // Attempts to convert the input to a fully qualified URL have failed
  // Treat the input as a search query
  return template.replace("%s", encodeURIComponent(input));
}
var server = localStorage.getItem('server-node');
function getRandom(max) {
 return Math.floor(Math.random() * Math.floor(max)) + 1;
}  
if('server' === 'undefined){
getServer();
}
    function getServer(){
      localStorage.setItem('server-node', getRandom(1000000000000));
    var header = getRandom(8);
    if (header === 1){
      localStorage.setItem('domain', '.topvazgeo.online/launch.html?domain=);
                           }
      else if (header === 2){
        localStorage.setItem('domain', '.topvazgeo.site/launch.html?domain=);
    }
      else if (header === 3){
        localStorage.setItem('domain', '.mathsblog.online/launch.html?domain=);
                             }
      else if (header === 4){
        localStorage.setItem('domain', '.mathematicstopvaz.site/launch.html?domain=);
                             }
      else if (header === 5){
        localStorage.setItem('domain', '.topvazgeometry.online/launch.html?domain=);
                             }
      else if (header === 6){
        localStorage.setItem('domain', '.tvazgeometry.online/launch.html?domain=);
                             }
      else if (header === 7){
        localStorage.setItem('domain', '.tvazgeo.site/launch.html?domain=);
                             }
      else if (header === 8){
        localStorage.setItem('domain', '.tvazgeo.online/launch.html?domain=);
                            }
      else{
        localStorage.setItem('domain', '.topvazgeo.online/launch.html?domain=);
                             }
    }
