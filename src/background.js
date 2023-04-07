// Background script
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.data) {
    // Store the data in the extension's local storage
    chrome.storage.local.set({ myData: request.data }, function () {
      console.log("Data stored in local storage");
    });
    sendResponse({ message: "Data received successfully" });
  }
});

// Access the data from any part of the extension
chrome.storage.local.get(["myData"], function (result) {
  console.log("Your Auth Token:", result.myData);
});
