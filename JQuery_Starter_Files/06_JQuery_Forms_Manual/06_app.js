
// jquery logic


$('#submit-button').click(function () {
   $('#user_text').text($('#username').val());
   $('#pass_text').text($('#password').val());
   $('#email_text').text($('#email').val());
});




// javascript logic

/*
let submitbtn = document.querySelector('#submit-button');
let username = document.querySelector('#username');
let passWord = document.querySelector('#password');
let Email = document.querySelector('#email');
let user_text = document.querySelector('#user_text');
let pass_text = document.querySelector('#pass_text');
let emil_text = document.querySelector('#email_text');

submitbtn.addEventListener('click',function () {
   user_text.textContent = username.value;
   pass_text.textContent = passWord.value;
   emil_text.textContent = Email.value;
});

*/