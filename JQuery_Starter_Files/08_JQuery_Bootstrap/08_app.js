

// jquery logic


//  login

$('#login-button').click(function () {
   $('#form-card-header').removeClass('bg-danger').removeClass('bg-secondary').addClass('bg-success');
   $('#card-title').text('Login Here');
   $('#submit-button').removeClass('btn-teal').removeClass('btn-secondary').addClass('btn-success').text('Login');
});


//register

$('#register-button').click(function () {
   $('#form-card-header').removeClass('bg-success').removeClass('bg-dark').addClass('bg-secondary');
   $('#card-title').text('Register Here');
   $('#submit-button').removeClass('btn-success').removeClass('btn-dark').addClass('btn-secondary').text('Register');
});


// signup

$('#signup-button').click(function () {
   $('#form-card-header').removeClass('bg-success').removeClass('bg-secondary').addClass('bg-dark');
   $('#card-title').text('Signup Here');
   $('#submit-button').removeClass('btn-success').removeClass('btn-secondary').addClass('btn-dark').text('signup');
});


/*

// javascript logic

let loginBtn = document.querySelector('#login-button');
let registerbtn = document.querySelector('#register-button');
let signupBtn = document.querySelector('#signup-button');

let formHeader = document.querySelector('#form-card-header');
let cardTitle = document.querySelector('#card-title');
let submitBtn = document.querySelector('#submit-button');

loginBtn.addEventListener('click',function () {
   formHeader.style.backgroundColor = 'green';
   cardTitle.textContent = 'login Here';
   submitBtn.style.backgroundColor = 'green';
   submitBtn.textContent = 'login';
});

registerbtn.addEventListener('click',function () {
    formHeader.style.backgroundColor = 'blue';
    cardTitle.textContent = 'register Here';
    submitBtn.style.backgroundColor = 'blue';
    submitBtn.textContent = 'register';
});

signupBtn.addEventListener('click',function () {
    formHeader.style.backgroundColor = 'black';
    cardTitle.textContent = 'signup Here';
    submitBtn.style.backgroundColor = 'black';
    submitBtn.textContent = 'signup';
});

*/