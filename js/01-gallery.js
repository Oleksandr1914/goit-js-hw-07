import { galleryItems } from "./gallery-items.js";
// Change code below this line
const getEl = (x) => document.querySelector(x);

function addGallery() {
  const gallery = galleryItems
    .map(
      (el) => `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src=${el.preview}
        data-source=${el.original}
        alt=${el.description}
        />
        </a>
        </div>`
    )
    .join("");
  getEl(".gallery").insertAdjacentHTML("beforeend", gallery);
}

function modalImg(event) {
  event.preventDefault();
  const urlImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${urlImg}" width="800" height="600">
  `);
  instance.show();

  document.addEventListener("keydown", onCloseModal);
  function onCloseModal(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onCloseModal);
    }
  }
}

addGallery();
getEl(".gallery").addEventListener("click", modalImg);
