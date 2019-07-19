const auth = require("../../auth");
auth.initialize();

// $(document).ready(function() {

//     // Check for click events on the navbar burger icon
//     $(".navbar-burger").click(function() {
  
//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         $(".navbar-burger").toggleClass("is-active");
//         $(".navbar-menu").toggleClass("is-active");
  
//     });
//   });

const auth = require("../../auth");
auth.initialize();

$("#burger").click(() => {
    console.log("click");
 if ($(".navbar-menu").css("display") == "block") {
   console.log("close menu");
   $(".navbar-menu").css("display", "none");
 } else {
   console.log("open menu");
   $(".navbar-menu").css("display", "block");
 }
});