import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

const galleryMainContainer = document.querySelector(".gallery");

const galleryListItem = createListItem(galleryItems);

function createListItem(items) {
    return items.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        )
        .join("");
}

galleryMainContainer.insertAdjacentHTML("beforeend", galleryListItem);

galleryMainContainer.addEventListener("click", bigPhoto);

function bigPhoto(event) {
    event.preventDefault();
    // console.log(event.target.dataset.source);
    if (!event.target.classList.contains("gallery__image"))
    return;

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
instance.show();


}


