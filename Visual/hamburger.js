
// $(document).ready(function() {

//     // Check for click events on the navbar burger icon
//     $(".navbar-burger").click(function() {
  
//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         $(".navbar-burger").toggleClass("is-active");
//         $(".navbar-menu").toggleClass("is-active");
  
//     });
//   });



$(".navbar-burger").click(() => {
 if ($(".navbar-menu").css("display") == "block") {
   console.log("close menu");
   $(".navbar-menu").css("display", "none");
 } else {
   console.log("open menu");
   $(".navbar-menu").css("display", "block");
 }
});

//modal

var btn = document.querySelector('#showModal');
var modalDlg = document.querySelector('#image-modal');
var imageModalCloseBtn = document.querySelector('#image-modal-close');
btn.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
});