const btn = document.querySelector("button");
const div = document.querySelector("div");

const names = ['Kasia','Dobrawa', 'Maria', 'Ola', 'Asia', 'Emilia', 'Blanka' ];

const nameDraw = ()=>{
const index = Math.floor(Math.random()*(names.length));
console.log(index);
div.textContent = "Wylosowane imie to: " + names[index];

}
btn.addEventListener('click', nameDraw);