const timer =()=>{
let seconds =0;
const showTime= () =>{
document.body.textContent = `Spedziłeś na stronie ${seconds} sekund `;
seconds++;
}
return showTime;
}
const clock = timer();

setInterval(clock,1000);