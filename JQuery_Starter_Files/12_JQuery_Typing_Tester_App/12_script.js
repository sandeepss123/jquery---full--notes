//minutes = Math.floor((timer/100)/60);
// seconds = Math.floor((timer/100) - (minutes * 60));
// milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

let originalText = $('#original-text');
let messageCard = $('#message-card');
let Message = $('#message');
let resetBTn = $('#reset-button');
let textArea = $('#text-area');
let minutes = $('#minutes');
let seconds = $('#seconds');
let milliseconds = $('#m-seconds');

const textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

let timerRunnig = false;
let Timer = 0;
let Minutes = 0;
let Seconds = 0;
let milliSeconds = 0;
let Interval = 0;

// keyup event for text area
textArea.keyup(function () {
    let textLenth = textArea.val().length;
    let textEntered = textArea.val();
    let originaLText = originalText.text();
    let partialText = originaLText.substr(0,textLenth);
    callTimer(textLenth);
    evaluateText(textEntered,originaLText,partialText);
});

// click on reset button

resetBTn.click(function () {
   clearInterval(interval);
   resetVariables();
   messageCard.removeClass('bg-success').removeClass('bg-danger').removeClass('bg-primary').addClass('bg-light');
   Message.text('');
   textArea.val('');
   milliSeconds.text('00');
   seconds.text('00');
   minutes.text('00');
   generateRondamText();
});

// call Timer
let callTimer = (textLenth) => {

};