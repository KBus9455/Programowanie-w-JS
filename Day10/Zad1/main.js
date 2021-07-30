const spanText = document.querySelector('span.text')
const text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum possimus eius ad! Necessitatibus sed, accusantium laborum iste voluptatum consectetur, est dicta voluptatibus doloribus veniam, numquam inventore atque earum quos architecto asperiores. Libero quisquam molestiae hic neque, culpa officiis perferendis unde odit quae vitae illum et suscipit magnam deleniti? Est a facere delectus natus dolor odit tempora culpa, libero ab iure at reiciendis distinctio magnam impedit non quasi! Perferendis beatae voluptates illum dolor laboriosam enim error animi! Corporis itaque a mollitia quaerat, non magnam! Quia asperiores, magnam earum, beatae, harum aperiam iusto eos nostrum est quis deserunt? Ab, eveniet quidem!';
const spanCursor = document.querySelector('span.cursor')
const time = 50;
let indexText=0;
const typing =()=>{
spanText.textContent += text[indexText];
indexText++;
if (indexText ==text.length) clearInterval(intervalTyping);
}
const intervalTyping = setInterval(typing, time);

const bling = ()=>{
spanCursor.classList.toggle('active')
}
setInterval(bling,500)