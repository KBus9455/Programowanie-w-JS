// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
const text = e.target.value;
const textBig = text.toUpperCase();
console.log(textBig);
for(let i =0;i<passwords.length;i++){
    if(textBig === passwords[i].toUpperCase()){
document.querySelector('div').textContent = messages[i];
    };

}
};
input.addEventListener("input", showMessage)



