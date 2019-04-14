
$('#plus-button').click(function () {
   $('#operator').text($(this).text());
});

$('#minus-button').click(function () {
   $('#operator').text($(this).text());
});

$('#div-button').click(function () {
   $('#operator').text($(this).text());
});

$('#mul-button').click(function () {
   $('#operator').text($(this).text());
});

$('#equals_button').click(function () {
    let firstNo = $('#first_number').val();
    let secondNo = $('#second_number').val();
    let result = 0;
   if (firstNo !== '' && secondNo !== ''){
       firstNo = Number(firstNo);
       secondNo = Number(secondNo);
       switch ($('#operator').text()){
           case '+':
               result = firstNo + secondNo;
            break;
           case '-':
               result = firstNo - secondNo;
               break;
           case '/':
               result = firstNo / secondNo;
               break;
           case '*':
               result = firstNo * secondNo;
       }
       $('#result_button').text(result);
   }
});

$('#clear-button').click(function () {
    $('#first_number').val('');
    $('#second_number').val('');
    $('#operator').text('+');
    $('#result_button').text('RESULT');
});