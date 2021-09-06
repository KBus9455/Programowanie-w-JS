// http://websamuraj.pl/examples/js/projekt11/
const startPauseBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const display = document.querySelector(".time div");


let active = false;
let milisec = 0;
let min = 0;
let index;
const resetTime = () => {
    display.textContent = "---"
    milisec = 0;
    active = false;
    console.log(active);
    clearInterval(index);
    startPauseBtn.textContent = "Start";
};
const countTime = () => {
    milisec++;
    if (milisec / 100 == 60) {
        milisec = 0;
        min++;
    }
    display.textContent = `${min<10? "0"+min:min}.${(milisec/100).toFixed(2)<10? "0"+(milisec/100).toFixed(2):(milisec/100).toFixed(2)}`;
};
const start = () => {

    if (!active) {
        startPauseBtn.textContent = "Pauza";
        active = !active;
        index = setInterval(countTime, 10);

    } else {
        startPauseBtn.textContent = "Start";
        active = !active;
        clearInterval(index);
    }

}

resetBtn.addEventListener("click", resetTime);
startPauseBtn.addEventListener("click", start);