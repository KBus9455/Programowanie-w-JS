/*<!-- Projekt docelowy:
https://websamuraj.pl/examples/js/projekt6-zad1/ -->
<!-- Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz) -->
<!-- Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli -->
<!-- Przycisk reset: usuwa możliwości (tablica staje się pusta) -->
<!-- Przycisk pokaż odpowiedź - losuje z tablicy możliwość -->
<!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->*/

let options = ['Walcz', "Uda się!", "Dasz radę", "Jesteś najlepszy"];
const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnshowAdvice = document.querySelector(".showAdvice");
const btnshowOptions = document.querySelector(".showOptions");
const input = document.querySelector('input');

const addOption = (e) => {
    e.preventDefault();
    const text = input.value;
    console.log(text);
    options.push(text);
    input.value = "";
}

const showOptions = () => {
    alert(options)
}
const cleanOptions = (e) => {
    e.preventDefault();
    console.log("dziala")
    options = [];
}
const showAdvice=()=>{
    const index = Math.floor(Math.random()*options.length);
    console.log(index);
    document.querySelector('h1').textContent = options[index];
}

btnAdd.addEventListener('click', addOption)
btnshowOptions.addEventListener('click', showOptions)
btnClean.addEventListener('click', cleanOptions)
btnshowAdvice.addEventListener('click', showAdvice)