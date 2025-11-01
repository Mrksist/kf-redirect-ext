chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("://codeforces.org")) {
      return {
        redirectUrl: details.url.replace("://codeforces.org", "://codeforces.com/codeforces.org")
      };
    }
    if (details.url.includes("://userpic.codeforces.org")) {
      return {
        redirectUrl: details.url.replace("://userpic.codeforces.org", "://codeforces.com/userpic.codeforces.org")
      };
    }
  },
  {
    urls: ["*://userpic.codeforces.org/*", "*://codeforces.org/*"],
    types: ["stylesheet", "script", "image"]
  },
  ["blocking"]
);
