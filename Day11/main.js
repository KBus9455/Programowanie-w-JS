const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg'];
const texts = ['Pierwszy tekst', 'Drugi tekst', 'Trzeci tekst']
const dotSpans = [...document.querySelectorAll('span')];
const img = document.querySelector("img");
const h1 = document.querySelector('h1');
let time = 1000;
let i = 1;
const changeDots = () => {
    dotSpans.forEach((span) => span.classList.remove("active"));
    dotSpans[i].classList.add('active');
}
const change = () => {
    img.src = images[i];
    h1.textContent = texts[i];
    changeDots();
    i++;
    if (i >= images.length) i = 0;
}

setInterval(change, time)