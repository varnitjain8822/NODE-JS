const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let offset = 0;
const cardWidth = 240; // card width + margin

nextBtn.addEventListener("click", () => {
  if (offset > -(carousel.scrollWidth - carousel.clientWidth)) {
    offset -= cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (offset < 0) {
    offset += cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});
