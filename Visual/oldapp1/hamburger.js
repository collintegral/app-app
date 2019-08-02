
// $(document).ready(function() {

//     // Check for click events on the navbar burger icon
//     $(".navbar-burger").click(function() {
  
//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         $(".navbar-burger").toggleClass("is-active");
//         $(".navbar-menu").toggleClass("is-active");
  
//     });
//   });


const burger = document.querySelector("#burger")
const navbarMenu = document.querySelector(".navbar-menu")

burger.addEventListener(click, () => {
 if (navbarMenu.css("display") === "block") {
  navbarMenu.css("display", "none");
 } else {
  navbarMenu.css("display", "block");
 }
});

//modal

var btn = document.querySelector('#showModal');
var modalDlg = document.querySelector('#image-modal');
var imageModalCloseBtn = document.querySelector('#image-modal-close');
btn.addEventListener('click', () => {
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', () => {
  modalDlg.classList.remove('is-active');
});

var btn = document.querySelector('#showModal1');
var modalDlg = document.querySelector('#image-modal1');
var imageModalCloseBtn = document.querySelector('#image-modal-close1');
btn.addEventListener('click', () => {
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', () => {
  modalDlg.classList.remove('is-active');
});

//Drag and drop js