/*
    1) SMS App
    2) Enable Submit Button if file selected
    3) Show Password with check Box
    4) Change Images with button
    5) Display Triangle Strings with Text Box

 */



// sms app

let charactercunt = 100;
$('#text-area').keyup(function () {
   $('#span').text(charactercunt - $(this).val().length);
});

// show password


/*
     // jquery logic

let passbox = $('#password');
$('#check').change(function () {
   let thetype = passbox.attr('type');
    (thetype === 'password')? passbox.attr('type','text') : passbox.attr('type','password');
});
*/
        // jquery short logic

$('#check').click(function () {
    (  $('#password').attr('type') === 'password') ? $('#password').attr('type','text'): $('#password').attr('type','password');
});




/*
           // javascript logic

let checkbox = document.querySelector('#check');
let passbox = document.querySelector('#password');

checkbox.addEventListener('click',function () {
    (passbox.getAttribute('type') === 'password')? passbox.setAttribute('type','text') : passbox.setAttribute('type','password');
});


*/