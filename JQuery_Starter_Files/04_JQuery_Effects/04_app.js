/*  USE BS Cards
    1) Show + Hide => Toggle
    2) FadeIn + FadeOut => FadeToggle
    3) slideUp + SlideDown => SlideToggle
    4) animate
    5) Stop
 */

// hide and show

let hidecount = 0;
$('#btn-1').click(function () {
   if (hidecount % 2 === 0){
       $(this).text('SHOW');
       $('#card-1').hide(1000);
       hidecount++;
   }
   else {
       $(this).text('HIDE');
       $('#card-1').show(1000);
       hidecount++;
   }
});

/*

        javascript toggle

let btn1 = document.querySelector('#btn-1');
let card1 = document.querySelector('#card-1');
let hideCount = 0;

btn1.addEventListener('click',function () {
   if (hideCount %2===0){
       btn1.textContent = 'SHOW';
       card1.style.display = 'none';
       card1.style.transition = '1s';
       hideCount++
   }
   else {
       btn1.textContent = 'HIDE';
       card1.style.display = 'block';
       card1.style.transition = '1s';
       hideCount++
   }
});

*/


// hide and show toggle

$('#btn-2').click(function () {
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE');
    $('#card-2').toggle(1000);
});

// fadein fadeout
let fadecount = 0;
$('#btn-3').click(function () {
   if (fadecount %2 === 0){
       $(this).text('FADEIN');
       $('#card-3').fadeOut(1000);
       fadecount++
   }
   else {
       $(this).text('FADEOUT');
       $('#card-3').fadeIn(1000);
       fadecount++
   }
});


//fade toggle

$('#btn-4').click(function () {
    ($(this).text() ==='FADEOUT')? $(this).text('FADEIN') :$(this).text('FADEOUT');
    $('#card-4').fadeToggle(1000);
});


// slide up slide down
let slidecount = 0;
$('#btn-5').click(function () {
   if (slidecount %2 === 0){
       $(this).text('SLIDEDOWN');
       $('#card-5').slideUp(1000);
       slidecount++;
   }
   else {
       $(this).text('SLIDEUP');
       $('#card-5').slideDown(1000);
       slidecount++;
   }

});

// slide up slide down toggle

$('#btn-6').click(function () {
    ($(this).text() === 'SLIDEUP') ? $(this).text('SLIDEDOWN') : $(this).text('SLIDEUP');
    $('#card-6').slideToggle(800);
});