const square = document.createElement("div");
document.body.appendChild(square);
let size = 100;
square.style.width = size + "px";
square.style.height = size + "px";
let grow = true;
window.addEventListener("scroll", function () {
    if(grow) {
        size = size + 10;
        square.style.height = size + "px";
        square.style.width = size + "px";
    }
      else{
        size = size -10 ;
        square.style.height = size + "px";
        square.style.width = size + "px";
    };

    if (size > window.innerHeight/3){
        grow = false;
    }
     if (size ==0){
        grow = true;
    }

})