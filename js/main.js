const container = document.querySelector(".container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const closeBtn = document.querySelector(".close-btn");
const illustrations = document.querySelectorAll(".illustration");
const images = [...document.querySelectorAll(".images img")];
const overlay = document.querySelector("#overlay");
const upBtn = document.querySelector(".up");

//event listeners
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
upBtn.addEventListener("click", () => scrollTo(0, 0));
closeBtn.addEventListener("click", toggleGallery);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    toggleGallery();
  }
});

illustrations.forEach((illustration) => {
  illustration.addEventListener("click", () => {
    show(illustration.dataset.index);
    toggleGallery();
  });
});

//functions
function showPrev() {
  const currentImageIndex = images.findIndex(
    (img) => !img.classList.contains("hidden")
  );
  const prevImageIndex =
    (currentImageIndex - 1 + images.length) % images.length;

  images[currentImageIndex].classList.add("hidden");
  images[prevImageIndex].classList.remove("hidden");
}

function showNext() {
  const currentImageIndex = images.findIndex(
    (img) => !img.classList.contains("hidden")
  );

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].classList.add("hidden");
  images[nextImageIndex].classList.remove("hidden");
}

function toggleGallery() {
  overlay.classList.toggle("hidden");
  container.classList.toggle("blur");
}

function show(i) {
  images.forEach((img) => img.classList.add("hidden"));
  images[i].classList.remove("hidden");
}

//for showing/hidding up button
window.addEventListener("scroll", toggleUpBtn);

function toggleUpBtn() {
  if (scrollY > 500) {
    upBtn.classList.remove("hidden");
  } else {
    upBtn.classList.add("hidden");
  }
}

//   const nextImageIndex =
//     (currentImageIndex + shift + images.length) % images.length;
