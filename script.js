// Placeholder for future interactivity
console.log("Landing page loaded");
// FILTER + SEARCH
const filter = document.getElementById("subjectFilter");
const search = document.getElementById("searchInput");
const cards = document.querySelectorAll(".question-card");

function applyFilters() {
  const filterVal = filter.value;
  const searchVal = search.value.toLowerCase();

  cards.forEach(card => {
    const subject = card.dataset.subject;
    const content = card.innerText.toLowerCase();

    const visible =
      (filterVal === "all" || subject === filterVal) &&
      content.includes(searchVal);

    card.style.display = visible ? "block" : "none";
  });
}

filter.addEventListener("change", applyFilters);
search.addEventListener("input", applyFilters);

// Simple submit animation
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

document.getElementById("menuToggle").onclick = () => {
  document.querySelector(".navbar nav").classList.toggle("active");
};

