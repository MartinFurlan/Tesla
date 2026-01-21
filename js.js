// =========================
//  TESLA LOGO NA CANVASU
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("logoCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Shrani stanje
  ctx.save();

  // LOGO nastavitve
  const logoWidth = 266;
  const logoHeight = 252;
  const scale = 0.20;

  ctx.scale(scale, scale);
  ctx.translate(0, 0);

  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.fillStyle = "#000"; 
  ctx.miterLimit = 4;

  ctx.save();
  ctx.beginPath();

  // Srednji del logotipa
  ctx.moveTo(139, 253);
  ctx.lineTo(175, 53);
  ctx.bezierCurveTo(175, 53, 219, 57, 221, 72);
  ctx.bezierCurveTo(221, 72, 244, 63, 255, 46);
  ctx.bezierCurveTo(255, 46, 166, 25, 166, 25);
  ctx.lineTo(139, 57);
  ctx.lineTo(139, 56);
  ctx.lineTo(113, 25);
  ctx.bezierCurveTo(113, 25, 68, 26, 24, 46);
  ctx.bezierCurveTo(24, 46, 58, 72, 58, 72);
  ctx.bezierCurveTo(58, 72, 70, 53, 104, 53);
  ctx.lineTo(139, 253);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.beginPath();

  // Zgornji lok logotipa
  ctx.moveTo(139, 15);
  ctx.bezierCurveTo(175, 15, 217, 21, 259, 39);
  ctx.bezierCurveTo(265, 29, 266, 25, 266, 25);
  ctx.bezierCurveTo(220, 6, 177, 0, 139, 0);
  ctx.bezierCurveTo(102, 0, 59, 6, 12, 25);
  ctx.bezierCurveTo(12, 25, 15, 30, 20, 39);
  ctx.bezierCurveTo(62, 21, 103, 15, 139, 15);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.restore();
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (!track || slides.length === 0 || !prevBtn || !nextBtn) {
    console.warn("Carousel elementi niso najdeni.");
    return;
  }

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});

// =========================
//  LETO V FOOTERJU
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
