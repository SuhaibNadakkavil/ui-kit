/* Mobile Menu Toggle */
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

/* Dynamic Year */
document.getElementById("year").textContent = new Date().getFullYear();


/* ==========================
      MODAL LOGIC
========================== */
document.querySelectorAll("[data-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).classList.remove("hidden");
  });
});

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal-overlay").classList.add("hidden");
  });
});

/* Close modal by clicking outside */
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
    }
  });
});

/* =========================
   Monthly / Yearly Toggle
========================= */
const pricingToggle = document.getElementById("pricingToggle");
const priceValue = document.getElementById("priceValue");

if (pricingToggle && priceValue) {
  pricingToggle.addEventListener("change", () => {
    if (pricingToggle.checked) {
      priceValue.textContent = "$299";  // yearly
    } else {
      priceValue.textContent = "$29";   // monthly
    }
  });
}