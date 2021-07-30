// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

// Implementacja

let letter = -15;
let word = 0;


// Implementacja
const addLetter = () => {
 // Użyj w środku setTimeout
 if (letter >= 0) {
  spnText.textContent += txt[word][letter];
 }
letter++;
 if (letter === txt[word].length) {

  word++;
  if (word === txt.length) word=0;

  return setTimeout(() => {
   letter = -15;
   spnText.textContent = '';
   addLetter();
  }, 2000)


 }
 setTimeout(addLetter, 100)

}



addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);