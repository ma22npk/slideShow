'use strict';

{
  const images = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
    'img/7.png'
  ];
  let currentIndex = 0;

  const mainImages = document.getElementById('main');
  mainImages.src = images[currentIndex];
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

}