const qtyDisplay = document.getElementById("qty-value");
const plusBtn = document.getElementById("increase");
const minusBtn = document.getElementById("decrease");

plusBtn.addEventListener("click", () => {
  qtyDisplay.textContent = parseInt(qtyDisplay.textContent) + 1;
});

minusBtn.addEventListener("click", () => {
  const current = parseInt(qtyDisplay.textContent);
  if (current > 0) qtyDisplay.textContent = current - 1;
});



// Gestion des miniatures -> clic pour changer l’image principale
const thumbnails = document.querySelectorAll(".thumbnails img");
const mainImg = document.querySelector(".main-img");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Remplacer -thumbnail par rien pour afficher la grande version
    mainImg.src = thumb.src.replace("-thumbnail", "");

    // Retirer l’effet actif de tous
    thumbnails.forEach(img => img.classList.remove("active"));
    // Ajouter l’effet actif à la miniature sélectionnée
    thumb.classList.add("active");
  });
});




const addToCartBtn = document.querySelector(".add-to-cart");

addToCartBtn.addEventListener("click", () => {
  const qty = parseInt(qtyDisplay.textContent);

  if (qty > 0) {
    alert(`🛒 ${qty} article(s) ajouté(s) au panier !`);
  } else {
    alert("🚫 Veuillez sélectionner au moins 1 article.");
  }
});

