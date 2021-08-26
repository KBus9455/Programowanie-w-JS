const daysContainer = document.querySelector('.d');
const hoursContainer = document.querySelector('.h');
const minutesContainer = document.querySelector('.m');
const secondsContainer = document.querySelector('.s');

const endTime = new Date('2021-12-24 16:00:00').getTime();

setInterval(()=>{
  let nowTime = new Date().getTime();
  let time = Math.floor((endTime - nowTime)/1000);  

let days = Math.floor(time/86400);
let hours = Math.floor((time%86400)/60/60);
let minutes = Math.floor(((time%86400)%3600)/60);
let seconds = (((time%86400)%3600)%60)

daysContainer.textContent = days;
hoursContainer.textContent = hours;
minutesContainer.textContent = minutes;
secondsContainer.textContent = seconds;
},

1000);



