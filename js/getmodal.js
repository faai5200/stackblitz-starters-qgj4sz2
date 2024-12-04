// Get the modals
var modal = document.getElementById('myModal');
var callbackModal = document.getElementById('callbackModal');

// Get the buttons that open the modals
var btn1 = document.getElementById('myBtn1');
var btn2 = document.getElementById('myBtn2');
var btn3 = document.getElementById('myBtn3');
var btn4 = document.getElementById('myBtn4');
var btn5 = document.getElementById('myBtn5');
var callbackBtn = document.getElementById('callback');

// Get the <span> elements that close the modals
var closeBtn1 = document.getElementsByClassName('my-close')[0];
var closeBtn2 = document.getElementsByClassName('callback-close')[0];

// When the user clicks the buttons, open the modals
btn1.onclick =
  btn2.onclick =
  btn3.onclick =
  btn4.onclick =
  btn5.onclick =
    function () {
      modal.style.display = 'block';
    };

callbackBtn.onclick = function () {
  callbackModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modals
closeBtn1.onclick = function () {
  modal.style.display = 'none';
};

closeBtn2.onclick = function () {
  callbackModal.style.display = 'none';
};

closeBtn3.onclick = function () {
  callbackModal.style.display = 'none';
};
closeBtn4.onclick = function () {
  callbackModal.style.display = 'none';
};
closeBtn5.onclick = function () {
  callbackModal.style.display = 'none';
};
// When the user clicks anywhere outside of the modals, close them
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  } else if (event.target == callbackModal) {
    callbackModal.style.display = 'none';
  }
};
