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

const revealElements = document.querySelectorAll("section, .habitat-item, .threat-item, .fact-card");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { 
    threshold: 0.15,
  }
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});