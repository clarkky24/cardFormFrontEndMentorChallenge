const name = document.getElementById('name');
const form = document.getElementById('form');
const  number = document.getElementById('card-number');
const nameError = document.getElementById('nameError');

function nameCheck(){
    nameValue = name.value;
    if(/\d/.test(nameValue)){
        nameError.textContent = 'Please input a valid Name';
        nameError.style.color = 'red';
        nameError.style.fontSize = '.6em';
        nameError.style.letterSpacing = '2px';
        nameError.style.borderColor = 'red'
        name.style.marginBottom = '0';
    }else {
        nameError.textContent = '';
        name.style.marginBottom = '2em';
    }
}


name.addEventListener('input' , nameCheck)