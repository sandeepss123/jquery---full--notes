/*
    1) Inline JQuery with a paragraph
    2) Internal JQuery with a Card
    3) External JQuery with a Card
 */

$('#user').keyup(function () {
   $('#h2tag').text($(this).val());
});

