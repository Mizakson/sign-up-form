//DOM ELEMENTS
const firstPassword = document.getElementById('pword');
const secondPassword = document.getElementById('confirm-pword');
const submitButton = document.querySelector('button');
const passwords = document.querySelectorAll('.pword');

let pw1 = "";
let pw2 = "";

function logPasswords() {
    
    firstPassword.addEventListener('input', (e) => {
        pw1 = e.target.value;
        console.log('pw1: '+pw1);
    })
    
    secondPassword.addEventListener('input', (e) => {
        pw2 = e.target.value;
        console.log('pw2: '+pw2);
    })
    
    return pw1, pw2;

};


function formCompletion() {
    submitButton.addEventListener('click', () => {
        alert('Form submitted successfully!')
        console.log('form submission');
    })
}

logPasswords();
formCompletion();
