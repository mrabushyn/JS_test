import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const mainGalleryItemsContainer = document.querySelector('.gallery');
console.log(mainGalleryItemsContainer);

const createGallery = galleryItem(galleryItems);


function galleryItem(items) {
return items
    .map(
        ({ preview, original, description }) =>
            `<a  href="${original}" class="gallery__item">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt=""
  title="${description}"/>
</a>`).join("");
}

mainGalleryItemsContainer.insertAdjacentHTML("beforeend", createGallery);

mainGalleryItemsContainer.addEventListener("click", createSliderGallery)

function createSliderGallery(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) 
    return;
var lightbox = new SimpleLightbox(".gallery a", {
    captionPosition: "bottom",
    captionDelay: 500,
});
    // lightbox()
}
