import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './app.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// $("#burger").click(() => {
//     console.log("click");
//     if ($(".navbar-menu").css("display") == "block") {
//       console.log("close menu");
//       $(".navbar-menu").css("display", "none");
//     } else {
//       console.log("open menu");
//       $(".navbar-menu").css("display", "block");
//     }
//   });
  
//   //modal
  
//   const loginbtn = document.querySelector('#showModal');
//   const loginmodalDlg = document.querySelector('#image-modal');
//   const loginimageModalCloseBtn = document.querySelector('#image-modal-close');
//   loginbtn.addEventListener('click', () => {
//     loginmodalDlg.classList.add('is-active');
//   });
  
//   loginimageModalCloseBtn.addEventListener('click', () => {
//     loginmodalDlg.classList.remove('is-active');
//   });
  
//   const signupbtn = document.querySelector('#showModal1');
//   const signupmodalDlg = document.querySelector('#image-modal1');
//   const signupimageModalCloseBtn = document.querySelector('#image-modal-close1');
//   signupbtn.addEventListener('click', () => {
//     signupmodalDlg.classList.add('is-active');
//   });
//   const signup = document.querySelector('#sign-up-form');
  
//   signup.addEventListener('submit', (event) => {
//     event.preventDefault;
//     const email = document.querySelector("#email").textContent;
//     const username = document.querySelector("#username").textContent;
//     const password = document.querySelector("#password").textContent;
//     const confpassword = document.querySelector("#confpassword").textContent;
//     const postInfo = { email, username, password, confpassword };
  
//     axios.post('/api/signup', postInfo).then((response) => {
//       if (response.data === 'success') {
//         signupmodalDlg.classList.remove('is-active');
//         loginmodalDlg.classList.add('is-active');
//         document.querySelector("#loginemail").textContent = email;
//         document.querySelector("#loginpassword").textContent = password;
//       }
//       else {
//         document.querySelector("#errors").textContent = response.data;
//       }
//     })
//   })
  
//   signupimageModalCloseBtn.addEventListener('click', () => {
//     signupmodalDlg.classList.remove('is-active');
//   });