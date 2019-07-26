import React, { Component } from 'react';

class App extends Component {

//   $("#burger").click(() => {
//     console.log("click");
//     if ($(".navbar-menu").css("display") == "block") {
//       console.log("close menu");
//       $(".navbar-menu").css("display", "none");
//     } else {
//       console.log("open menu");
//       $(".navbar-menu").css("display", "block");
//     }
//   });

// //modal

// var btn = document.querySelector('#showModal');
// var modalDlg = document.querySelector('#image-modal');
// var imageModalCloseBtn = document.querySelector('#image-modal-close');
// btn.addEventListener('click', function () {
//   modalDlg.classList.add('is-active');
// });

// imageModalCloseBtn.addEventListener('click', function () {
//   modalDlg.classList.remove('is-active');
// });

// var btn = document.querySelector('#showModal1');
// var modalDlg = document.querySelector('#image-modal1');
// var imageModalCloseBtn = document.querySelector('#image-modal-close1');
// btn.addEventListener('click', function () {
//   modalDlg.classList.add('is-active');
// });

// imageModalCloseBtn.addEventListener('click', function () {
//   modalDlg.classList.remove('is-active');
// });
render() {
  return (
    <div>
  <nav className="navbar is-mobile" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="Logo.PNG"> </img>
        </a>
        {/* Hamburger */}
        {/* <a role="button" id="burger" className="navbar-burger burgeris-mobile" aria-label="menu" aria-expanded="false"
          data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div> */}

      <div id="navbarMenu" className="navbar-menu is-pulled-left is-mobile">
        <div className="navbar-start is-mobile">
          <div className="navbar-item is-hoverable is-mobile">
            <a href="#" className="navbar-link is-mobile">
              The App-App
                </a>
            <div className="navbar-dropdown is-mobile">
              <a href="#" className="navbar-item is-mobile">
              </a>
              <hr className="navbar-divider is-mobile"> </hr>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            {/* <!--Modal--> */}
            <div id="image-modal" className="modal">
              <div className="modal-background"></div>
              <div className="modal-content">
                <div className="modal-card">

                  {/* <!----> */}
                  <article className="message">
                    <div className="message-header">
                      <p>Welcome!</p>
                    </div>
                    <div className="message-body">
                      <form action="/login" method="post">
                        <div>
                          <label>Username:</label>
                          <input type="text" name="username" />
                        </div>
                        <div>
                          <label>Password:</label>
                          <input type="password" name="password" />
                        </div>
                        <div>
                          <input type="submit" value="Log In" />
                        </div>
                      </form>
                    </div>
                  </article>
                  {/* <!----> */}

                </div>
              </div>
              <button id="image-modal-close" className="modal-close"></button>
            </div>
            <br> </br>
            <button className="button" id="showModal">Log In</button>
          </div>

          <div className="navbar-item">
            {/* <!--Modal--> */}
            <div id="image-modal1" className="modal">
              <div className="modal-background"></div>
              <div className="modal-content">
                <div className="modal-card">
                  {/* <!---->  */}
                  <article className="message">
                    <div className="message-header">
                      <p>Welcome!</p>
                    </div>
                    <div className="message-body">
                      <form action="/login" method="post">
                        <div>
                          <label>Username:</label>
                          <input type="text" name="username" />
                        </div>
                        <div>
                          <label>Password:</label>
                          <input type="password" name="password" />
                        </div>
                        <div>
                          <label>Confirm Password:</label>
                          <input type="password" name="password" />
                        </div>
                        <div>
                          <input type="submit" value="Log In" />
                        </div>
                      </form>
                    </div>
                  </article>
                  {/* <!----> */}
                </div>
              </div>
              <button id="image-modal-close1" className="modal-close"></button>
            </div>
            <br> </br>
            <button className="button" id="showModal1">Sign Up</button>
          </div>
        </div>
      </div>
    
    </nav>
    {/* <!--Will be draggable components, static for now--> */ }
    < nav className= "navbar is-mobile" role= "navigation" aria- label="main navigation">

      {/* <!-- Hamburger --> */ }
      < a role = "button" id = "burger" className = "navbar-burger burgeris-mobile" aria-label="menu" aria-expanded="false"
  data-target="navMenu" >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
          </a>

    <div id="navbarMenu" className="navbar-menu is-pulled-left is-mobile">
      <div className="navbar-start is-mobile">
        <a href="#" className="navbar-item is-mobile is-hoverable">
          Navbar
            </a>

            <a href="./components/message.jsx" class="navbar-item is-mobile is-hoverable">
            Message
          </a>
          <a href="./components/card.jsx" class="navbar-item is-mobile is-hoverable">
            Card
          </a>
          <a href="./components/hero.jsx" class="navbar-item is-mobile is-hoverable">
            Hero
          </a>
          <a href="./components/container.jsx" class="navbar-item is-mobile is-hoverable">
            Container
          </a>
          <a href="./components/image-box.jsx" class="navbar-item is-mobile is-hoverable">
            Image Box
          </a>
          <a href="#" class="navbar-item is-mobile is-hoverable">
            Footer
                </a>
      </div>
    </div>
    <div className="navbar-end"></div>
    </nav>

  {/* <!-- Body Grid --> */ }
  <div id="grid" className="container is-mobile">
    <div className="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div className="cell cell-1" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">1</div>
    <div className="cell cell-2" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">2</div>
    <div className="cell cell-3" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">3</div>
    <div className="cell cell-4" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">4</div>
    <div className="cell cell-5" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">5</div>
    <div className="cell cell-6" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">6</div>
    <div className="cell cell-7" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">7</div>
    <div className="cell cell-8" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">8</div>
    <div className="cell cell-9" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">9</div>
    </div>
  </div>


  {/* <!-- Footer --> */ }
  <footer className="footer">
    <div className="content has-text-centered">
      <i className="fab fa-facebook icon is-large is-primary"></i>
      <i className="fab fa-instagram icon is-large is-primary"></i>
      <i className="fab fa-github icon is-large is-primary"></i>
    </div>

    {/* <div className="container">
      <div className="content has-text-centered">
        <div className="fab fa-facebook is-primary"></div>
      </div>
    </div> */}
    </footer>
    </div>
  )}
  }