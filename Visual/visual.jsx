import React, { Component } from 'react';
class App extends Component {

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

//modal

var btn = document.querySelector('#showModal');
var modalDlg = document.querySelector('#image-modal');
var imageModalCloseBtn = document.querySelector('#image-modal-close');
btn.addEventListener('click', function () {
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function () {
  modalDlg.classList.remove('is-active');
});

var btn = document.querySelector('#showModal1');
var modalDlg = document.querySelector('#image-modal1');
var imageModalCloseBtn = document.querySelector('#image-modal-close1');
btn.addEventListener('click', function () {
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function () {
  modalDlg.classList.remove('is-active');
});
render() {
  return (
  <nav className="navbar is-mobile" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="Logo.PNG"> </img>
        </a>
        {/* Hamburger */}
        <a role="button" id="burger" className="navbar-burger burgeris-mobile" aria-label="menu" aria-expanded="false"
          data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className="navbar-menu is-pulled-left is-mobile">
        <div className="navbar-start is-mobile">
          <div className="navbar-item has-dropdown is-hoverable is-mobile">
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
        </div>

    <div id="navbarMenu" className="navbar-menu is-pulled-left is-mobile">
      <div className="navbar-start is-mobile">
        <a href="#" className="navbar-item is-mobile">
          Navbar
            </a>

        <a href="#" className="navbar-item is-mobile">
          Message
                </a>
        <a href="#" className="navbar-item is-mobile">
          Card
                </a>
        <a href="#" className="navbar-item is-mobile">
          Hero
                </a>
        <a href="#" className="navbar-item is-mobile">
          Container
                </a>
        <a href="#" className="navbar-item is-mobile">
          Image Box
                </a>
        <a href="#" className="navbar-item is-mobile">
          Footer
                </a>
      </div>
    </div>
          </div >
    <div className="navbar-end">
      </nav>

  {/* <!-- Body Grid --> */ }
  <div id="grid" className="container is-mobile">
    <div className="cell cell-1">1</div>
    <div className="cell cell-2">2</div>
    <div className="cell cell-3">3</div>
    <div className="cell cell-4">4</div>
    <div className="cell cell-5">5</div>
    <div className="cell cell-6">6</div>
    <div className="cell cell-7">7</div>
    <div className="cell cell-8">8</div>
    <div className="cell cell-9">9</div>
  </div>


  {/* <!-- Footer --> */ }
  <footer className="footer">
    <div className="content has-text-centered">
      <i className="fab fa-facebook icon is-large is-primary"></i>
      <i className="fab fa-instagram icon is-large is-primary"></i>
      <i className="fab fa-github icon is-large is-primary"></i>
    </div>

    <!-- <div className="container">
      <div className="content has-text-centered">
        <div className="fab fa-facebook is-primary"></div>
      </div>
    </div> -->
        </footer>
        )
}
}
