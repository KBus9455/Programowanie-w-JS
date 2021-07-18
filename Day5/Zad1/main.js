// tutaj rozwiązanie

const btn = document.querySelector("button");
const list = document.querySelectorAll("li");
size = 10;
let flag = true;
btn.addEventListener("click", function () {
    if (flag) {
        for (let i = 0; i < 10; i++) {
            list[i].style.display = "block";
        };
        flag=false;
    };
          size=size+3;
        for (let i = 0; i < 10; i++) {
            list[i].style.fontSize = size + "px";
        };



})