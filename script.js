const downloadCodeBtn = document.querySelector("#download-code");
const downloadDocsBtn = document.querySelector("#download-docs");
const thankYouMessage = document.querySelector("#thank-you-message");

function showThankYou(text) {
  // Clear any previous message before adding a new one
  thankYouMessage.innerHTML = `<p>${text}</p>`;
}

// Event listeners for the buttons
downloadCodeBtn.addEventListener("click", () => {
  showThankYou(
    "Thank you for downloading the SAFIS code! Your interest means a lot to us."
  );
});

downloadDocsBtn.addEventListener("click", () => {
  showThankYou(
    "We appreciate your download of the SAFIS documentation. You're part of something important."
  );
});
