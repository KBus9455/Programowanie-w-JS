const input = document.getElementById('password');
const passwords = ["userr", "wiosna"];
const message = ["Wyjechalam", "Piekna pora roku"];
const textField = document.querySelector(".message");
input.addEventListener('keyup', (e) => {
            const x = e.target.value;
            passwords.forEach((password, index) => {
                if (password === x) {
                    document.querySelector(".message").textContent = message[index];
                    e.target.value = "";
                      }
            }
            )
        }
        );
    
         
        input.addEventListener('focus', function (e) {
            input.classList.add('active');
        });
        input.addEventListener('blur', function (e) {
            input.classList.remove('active');
        })