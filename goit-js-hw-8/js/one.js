"use strict";

import galleryItems from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightBoxImg = document.querySelector(".lightbox___image");

const galleryConstructor = arr => {
  const qt = arr.length;

  for (let i = 0; i < qt; i++) {
    const imgSrc = arr[i].preview;
    const imgDataSourse = arr[i].original;
    const imgAlt = arr[i].description;

    galleryList.insertAdjacentHTML(
      "afterbegin",
      `
<li class="gallery__item">
<a
  class="gallery__link"
  href="${imgDataSourse}"
>
  <img
    class="gallery__image"
    src="${imgSrc}"
    data-source="${imgDataSourse}"
    alt="${imgAlt}"
  />

  <span class="gallery__icon">
    <i class="material-icons">zoom_out_map</i>
  </span>
</a>
</li>
`
    );
  }
};

galleryList.addEventListener("click", image);
document.addEventListener("keydown", closeImg);
lightbox.addEventListener("click", bigImage);

function image(e) {
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    lightBoxImg.src = e.target.dataset.source;
    lightBoxImg.alt = e.target.alt;
    lightbox.classList.toggle("is-open");
  }
}

function closeImg(e) {
  if (e.key === "Escape") {
    lightbox.classList.remove("is-open");
  }
  console.log(e.key);
}

function bigImage(e) {
  if (
    e.target !== lightBoxImg ||
    e.target.dataset.action === "close-lightbox"
  ) {
    lightbox.classList.remove("is-open");
  }
}

galleryConstructor(galleryItems);
