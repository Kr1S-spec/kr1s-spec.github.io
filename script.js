// Scroll to houses section with 40px offset (CSS handles the offset)
function scrollToHouses() {
  document.getElementById("houses-section").scrollIntoView();
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Wire buttons
document.getElementById("HeaderButton").addEventListener("click", scrollToHouses);
document.getElementById("scrollToTop").addEventListener("click", scrollToTop);
