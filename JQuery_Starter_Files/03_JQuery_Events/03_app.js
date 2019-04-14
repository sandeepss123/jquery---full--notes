/*
    1) Click Event for a button BS Styles
    2) dblClick event for a button BS Styles
    3) Hover on an Image with opacity
    4) Focus Event & blur Event
    5) MouseEnter Event to show a BS Modal
 */


// click event

$('#blue-btn').click(function () {
   $(this).removeClass('btn-primary').addClass('btn-danger');
});

// double click event

$('#red-btn').dblclick(function () {
   $(this).removeClass('btn-danger').addClass('btn-secondary') ;
});

// toggle event

let count = 0;
$('#green-btn').click(function () {
   if (count % 2 === 0){
       $(this).removeClass('btn-success').addClass('btn-info').text('DELETE');
   }
   else {
       $(this).removeClass('btn-info').addClass('btn-success').text('REGISTER');
    count++;
   }
});

// model display

$('#dark-btn').hover(function () {
   $('#light-modal').modal('show');
});