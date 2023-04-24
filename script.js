const name = document.getElementById('name');
const form = document.getElementById('form');
const  number = document.getElementById('card-number');
const nameError = document.getElementById('nameError');
const cardError = document.getElementById('numberError');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const yearError = document.getElementById('yearError');
const monthError = document.getElementById('monthError');
const cvcError = document.getElementById('cvcError');
// const inputsAll = document.querySelectorAll('input[type="text"], input[type="number"]');




// function that check name Error
function nameCheck(){
    nameValue = name.value.trim();
    if(/\d/.test(nameValue)){
        nameError.textContent = 'Please input a valid Name';
        nameError.style.color = 'red';
        nameError.style.fontSize = '.6em';
        nameError.style.letterSpacing = '2px';
        name.style.borderColor = 'red';
        name.style.marginBottom = '0';
    }else {
        nameError.textContent = '';
        name.style.borderColor = 'rgb(230, 224, 224)';
        name.style.marginBottom = '2em';
    }
}
// function that check card Error

function cardCheck() {
    const cardValue = number.value.trim();
    const regexToCheckCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/;
  
    if (!regexToCheckCard.test(cardValue)) {
      cardError.textContent = 'Please provide a valid card number.';
      cardError.style.color = 'red';
      cardError.style.fontSize = '.6em';
      cardError.style.letterSpacing = '2px';
      cardError.style.marginBottom = '2em'
      number.style.marginBottom = '0';
      number.style.borderColor = 'red';
    } else {
      cardError.textContent = '';
      number.style.borderColor = 'rgb(230, 224, 224)';
      number.style.marginBottom = '2em';
    }
  }
  // function that check month error
  
  function monthCheck() {
    const monthValue = month.value.trim();
  
    if (monthValue >= 1 && monthValue <= 12) {
      monthError.textContent = '';
      month.style.borderColor = 'rgb(230, 224, 224)';
      month.style.marginBottom = '2em';
    } else {
      monthError.textContent = 'Please enter a valid month.';
      monthError.style.color = 'red';
      monthError.style.fontSize = '.8em';
      monthError.style.letterSpacing = '3px';
      monthError.style.marginBottom = '2em'
      month.style.marginBottom = '.5em';
      month.style.borderColor = 'red';
    }
  }
  // function that check year Error
  
  function yearCheck(){
    const yearValue = year.value.trim();
    const yearRegex = /^[0-9]{1,2}$/;

    if(yearRegex.test(yearValue)){
        yearError.textContent = '';
        year.style.borderColor = 'rgb(230, 224, 224)';
        year.style.marginBottom = '2em';
    } else {
        yearError.textContent = 'Please enter a valid year.';
        yearError.style.color = 'red';
        yearError.style.fontSize = '.8em';
        yearError.style.letterSpacing = '2px';
        yearError.style.marginBottom = '2em'
        year.style.marginBottom = '.5em';
        year.style.borderColor = 'red';
    }
  }
  // function that check for valid Cvc

  function cvcCheck(){
    const cvcValue = cvc.value.trim();
    const cvcRegex = /^\d{3,4}$/;

    if(!cvcRegex.test(cvcValue)){
        cvcError.textContent = 'Please enter a valid CVC'
        cvcError.style.color = 'red';
        cvcError.style.fontSize = '.8em';
        cvcError.style.letterSpacing = '2px';
        cvcError.style.marginBottom = '2em'
        cvc.style.marginBottom = '.5em';
        cvc.style.borderColor = 'red';
    }else{
        cvcError.textContent = '';
        cvc.style.borderColor = 'rgb(230, 224, 224)';
        cvc.style.marginBottom = '1em';
    }
  }
  //function that style when focus or blur

  
//   inputsAll.forEach(function(input) {
//     // Add event listener for when the input is in focus
//     inputs.addEventListener('focus', function() {
//       inputs.classList.add('focused');
//     });
  
//     // Add event listener for when the input loses focus
//     input.addEventListener('blur', function() {
//       inputs.classList.remove('focused');
//     });
//   });

  //function that handles form submission

  function formSubmitHandler(e){
    e.preventDefault();
    window.location.href = 'success.html';
    form.reset();
    
  } 


form.addEventListener('submit', formSubmitHandler)
cvc.addEventListener('input', cvcCheck)
year.addEventListener('input', yearCheck)
name.addEventListener('input' , nameCheck);
number.addEventListener('input', cardCheck)
month.addEventListener('input', monthCheck)