
                  // jquery logic


// user name

$('#username').keyup(function () {
    $('#user_text').text($(this).val());
});


// password

  $('#password').keyup(function () {
     $('#pass_text').text($(this).val());
  });

 // Email

 $('#email').keyup(function () {
    $('#email_text').text($(this).val());
 });


  /*
   // javascript logic


 let Username = document.querySelector('#username');
 let Usertext = document.querySelector('#user_text');
 Username.addEventListener('keyup',function () {
     Usertext.textContent = Username.value;
 });


 let pass_word = document.querySelector('#password');
 let pass_text = document.querySelector('#pass_text');
 pass_word.addEventListener('keyup',function () {
    pass_text.textContent = pass_word.value;
 });

 let emaiil = document.querySelector('#email');
 let emaiil_text = document.querySelector('#email_text');
 emaiil.addEventListener('keyup',function () {
    emaiil_text.textContent = emaiil.value;
 });


  */