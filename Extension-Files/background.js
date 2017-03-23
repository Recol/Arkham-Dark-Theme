chrome.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    urls: ["https://*.cdnjs.cloudflare.com/ajax*snowstorm-min.js"],
    types: ["script"]
  },
  ["blocking"]
);