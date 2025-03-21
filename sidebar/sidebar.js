document.getElementById("capture-text").addEventListener("click", () => {
  // Request the background service worker to take a screenshot
  chrome.runtime.sendMessage({ type: "takeScreenshot" });
});

// Listen for the OCR-extracted text from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "displayText") {
    document.getElementById("extracted-text").innerText = message.text;
  }
});
