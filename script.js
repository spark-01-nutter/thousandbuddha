// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Gallery Image Popup
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    popup.innerHTML = `
      <div class="popup-content">
        <span class="close">&times;</span>
        <img src="${img.src}" alt="gallery image">
      </div>
    `;

    document.body.appendChild(popup);

    popup.querySelector(".close").onclick = () => {
      popup.remove();
    };

    popup.onclick = (e) => {
      if (e.target === popup) {
        popup.remove();
      }
    };
  });
});
