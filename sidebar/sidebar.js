document.getElementById("capture-text").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "captureScreenshot" });
});

// Listen for the screenshot data from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "screenshotTaken") {
    const textArea = document.getElementById("captured-text");
    textArea.value = `Screenshot captured: ${message.screenshotUrl}`;
    textArea.focus();  // Allows users to easily edit or input additional text
  }
});
