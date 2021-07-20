const square = document.querySelector('div');
let x = 150;
let y = 150;
square.style.top = y + "px";
square.style.left = x + "px";
let activeDraw = false;

square.addEventListener('mousedown', (e) => {
    square.style.backgroundColor = "gray";
    activeDraw = true;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
});

square.addEventListener('mousemove', (e) => {
    if (activeDraw) {
        x= e.clientX;
        y=e.clientY;
        square.style.top = y-insertDivX + "px";
        square.style.left =x-insertDivY+ "px";
    };

});

square.addEventListener('mouseup', () => {
    console.log("puszczam")
    square.style.backgroundColor = "black";
    activeDraw = false;
});