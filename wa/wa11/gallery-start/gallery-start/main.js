const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const altText = {
    'pic1.jpg': 'Okkyo Apparel Campaign Shot',
    'pic2.jpg': 'Avery Beauty Test Shot',
    'pic3.jpg': 'Anita Yoga Shot',
    'pic4.jpg': 'Finessen Beauty Test Shot',
    'pic5.jpg': 'Anita Stretching Shot'
};

for (let i = 0; i < imageFiles.length; i++) {
    const fileName = imageFiles[i];
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/' + fileName);
newImage.setAttribute('alt', altText[fileName]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', 'images/' + fileName);
    displayedImage.setAttribute('alt', altText[fileName]);
  });
}

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });