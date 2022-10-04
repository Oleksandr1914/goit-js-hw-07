import { galleryItems } from "./gallery-items.js";
// Change code below this line
const getEl = (x) => document.querySelector(x);

function addGallery() {
  const gallery = galleryItems
    .map(
      (el) => `<a class="gallery__item" href=${el.original}>
        <img class="gallery__image" src=${el.preview} alt="" title = ${el.description} />
        </a>`
    )
    .join("");
  getEl(".gallery").insertAdjacentHTML("beforeend", gallery);
}

function modalImg(event) {
  event.preventDefault();
  const textImg = event.target.alt;
  const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
  console.log(textImg);
  return lightbox;
}

addGallery();
getEl(".gallery").addEventListener("click", modalImg);
