/*
    1) Tag Selector
    2) Class Selector
    3) Id Selector
    4) Attribute Selector

 */

// id selector

$('#orange').click(function () {
   $(this).css({
       color:'white',
       backgroundColor:'orange',
       padding:'10px',
      'font-size': '20px',
      boxShadow:'0 0 10px 3px black',
       borderRadius:'20px'
   });
});

// class selector

$('.custom').click(function () {
    $(this).css({
        color:'white',
        backgroundColor:'blue',
        padding:'10px',
        'font-size': '20px',
        boxShadow:'0 0 10px 3px black',
        borderRadius:'20px'
    });
});

// attribute selector

let inputText = $('input[type="text"]');
inputText.focus(function () {
   $(this).css({
       'background-color' : 'black'
   }) ;
}).blur(function () {
    $(this).css({
        'background-color' : 'orange'
    });
});

let inputpass = $('input[type="password"]');
inputpass.focus(function () {
    $(this).css({
        'background-color' : 'black'
    });
}).blur(function () {
    $(this).css({
        'background-color' : 'orange'
    });
});