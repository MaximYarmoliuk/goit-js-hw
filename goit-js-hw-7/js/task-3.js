"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const galleryList = document.getElementById("gallery");

const buildGallery = arr => {
  const qt = arr.length;

  for (let i = 0; i < qt; i++) {
    const imgUrl = arr[i].url;
    const imgAlt = arr[i].alt;

    galleryList.insertAdjacentHTML(
      "afterbegin",
      `
  <li class="gallery-item"><img src="${imgUrl}" alt="${imgAlt}" class="image"></li>
  `
    );
  }

  
};

buildGallery(images);
