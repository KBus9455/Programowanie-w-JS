/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
/*
const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  switch (e.keyCode) {
    case 38:
      console.log("dziala");
      red++;
      green++;
      blue++;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
    case 40:
      red--;
      green--;
      blue--;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
  }
  */
const changeColor = (e) => {
  let x = e.keyCode;

  if (x === 38) {
    if (red < 255 && green < 255 && blue < 255) {
      red++;
      green++;
      blue++;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    console.log(red);

  } else if (x === 40) {
    if (red > 0 && green > 0 && blue >0) {
      red--;
      green--;
      blue--;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      console.log(red);
    };
  };
};

// 38 - strzałka do góry
// 40 - strzalka w dół

// wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
//tutaj twój kod
// wersja 1 - instrukcja if
// wersja 2 - instrukcja switch



window.addEventListener('keydown', changeColor)