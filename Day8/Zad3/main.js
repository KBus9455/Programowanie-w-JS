const input = document.querySelector('input');
const btnAdd = document.querySelector('button');
const btnDraw = document.querySelector('.draw');
const divDisplay = document.querySelector('.display');
const div = document.querySelector('div');
const names = [];
const addName = function (e) {
    e.preventDefault();
    const name = input.value;
    let check = true;
    for (let i = 0; i < names.length; i++) {
        if (name == names[i]) {
     alert("Takie imie zostało już podane");
            check = !check;
        }
    };
    if (check) {
        names.push(name);
        div.textContent = names + "   ";

    };
    input.value = "";

}

btnAdd.addEventListener("click", addName);
btnDraw.addEventListener("click", ()=>{
const index = Math.floor(Math.random()*(names.length));
divDisplay.textContent =" Wylosowane imię to " + names[index] + ".";
});

