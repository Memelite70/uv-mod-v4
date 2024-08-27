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
    // Consider whether you need to throw the error or not
  }

  var domain = localStorage.getItem('domain');
  var servernode = localStorage.getItem('server-node');

  // Check if domain and servernode are not null
  if (!domain || !servernode) {
    error.textContent = "Domain or server node is missing.";
    return;
  }

  const url = search(address.value, searchEngine.value);
  location.href = '//' + servernode + domain + url;
});

// Function defined outside the event listener
function getRandomUpTo(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
