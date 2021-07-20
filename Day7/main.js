const input = document.getElementById('password');
const password = "user";
const message = "Wyjechalam";
input.addEventListener('keyup', (e) => {
 x=e.target.value;
     if(x===password){
        document.querySelector(".message").textContent = message;
        e.target.value = "";
    }else{
                document.querySelector(".message").textContent ="";
    }
});
input.addEventListener('focus', function(e){
   input.classList.add('active');
}
)
input.addEventListener('blur', function(e){
    input.classList.remove('active');
}
)