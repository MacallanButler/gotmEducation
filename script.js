const factCards = document.querySelectorAll(".fact-card");
let activeCard = null;

factCards.forEach((card) => {
  card.addEventListener("click", () => {
    // If clicking the already-active card, close it
    if (activeCard === card) {
      card.classList.remove("active");
      activeCard = null;
      return;
    }

    // Close previously active card
    if (activeCard) {
      activeCard.classList.remove("active");
    }

    // Open clicked card
    card.classList.add("active");
    activeCard = card;
  });
});

// Smooth scroll from hero CTA
const ctaButton = document.querySelector(".cta-scroll");
const aboutSection = document.getElementById("about");

ctaButton.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
