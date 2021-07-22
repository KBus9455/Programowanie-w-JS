const btn = document.querySelector("button");
const section = document.querySelector("section");
const chars = 'abcdefghijklmnoprstuwxyzABCDEFGHIJKLMNOPRSTUWXYZ01234567890'
codesNumber = 1000;
charsNumber = 10;

const codesGenerator = () => {
    let code = '';
    for (let i = 0; i < codesNumber; i++) {
        for (let j = 0; j < charsNumber; j++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        const div = document.createElement('div');
        section.appendChild(div);
        div.textContent = code;
        code = "";
    }
}

btn.addEventListener('click', codesGenerator);