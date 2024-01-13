const passwordbox = document.getElementById("password");
const length = 12;

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '123456789';
const symbols = '@#$%^&*(){}[]<>?|+=-_';

const allCharacters = uppercase + lowercase + numbers + symbols;

function createpassword() {
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordbox.value = password;
}

function copypassword() {
    passwordbox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

