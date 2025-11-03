chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: "https://codeforces.com/codeforces.org/"
        }
      },
      condition: {
        regexFilter: "^https://codeforces\\.org/",
        resourceTypes: ["stylesheet", "script", "image"]
      }
    },
    {
      id: 2,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: "https://codeforces.com/userpic.codeforces.org/"
        }
      },
      condition: {
        regexFilter: "^https://userpic\\.codeforces\\.org/",
        resourceTypes: ["stylesheet", "script", "image"]
      }
    }
  ],
  removeRuleIds: [1, 2]
});