const add = () => {
    let number = 0;
    return () => {
        number++;
        console.log(number);
        document.body.textContent = `stan licznika wynosi: ${number}`;
    }
}
const clickCounter = add();
window.addEventListener('click', clickCounter)