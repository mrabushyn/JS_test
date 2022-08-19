import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems.description);

const galleryDiv = document.querySelector(".gallery")
// const galleryItem = galleryDiv.childNodes;  
console.log(galleryDiv);

for (let i = 0; i < galleryItems.length; i += 1) {
    const galleryItem = document.createElement("li");
    const galleryImg = document.createElement("img");
    console.log(galleryImg);
// const r = "<img class="gallery__image" src= ${"galleryItems.description"} alt=""></img>"
            
    galleryItem.insertAdjacentHTML(
        "beforeend", "<img></img> ");

    galleryItem.classList.add(".gallery__item");
    console.log(galleryItem);
}



    // const galleryImg = document.createElement("img");

    // const galleryItem = galleryDiv.children[i];

    // console.log(galleryItem);

// console.log(galleryDiv);
// list.insertAdjacentHTML("beforeend", ingredientsList.join(""));
