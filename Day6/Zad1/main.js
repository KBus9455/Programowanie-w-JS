
document.body.addEventListener('mousemove', (e)=>{
document.querySelector("h1").textContent = e.clientX+ ", " + e.clientY;
//document.body.style.backgroundColor = `rgb(${e.clientX/10},${e.clientY/10},${e.clientX/20})`
let x = e.clientX;
let y = e.clientY;
let w = window.innerWidth;
let z = window.innerHeight;
document.querySelector("h1").textContent = `(${Math.round(x/w*255)},${Math.round(y/z*255)},${Math.round((x/w*255+y/z*255)/2)})`;
document.body.style.backgroundColor = `rgb(${x/w*255},${y/z*255},${(x/w*255+y/z*255)/2})`;
if ((x/w*255)<125){
   document.querySelector("h1").style.color = "white"; 
};
if ((x/w*255)>=125){
   document.querySelector("h1").style.color = "black"; 
};
})