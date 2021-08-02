const images = ['images/img1.jpg','images/img2.jpg','images/img3.jpg'];
const texts = ['Pierwszy tekst', 'Drugi tekst', 'Trzeci tekst']
const img = document.querySelector("img");
const h1 = document.querySelector('h1');

let i = 1;
const change = ()=>{
    img.src = images[i];
    h1.textContent = texts[i];
    i++;
    if (i >= images.length) i=0;
    
}

setInterval(change, 700)