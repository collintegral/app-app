import React, {Component} from 'react';
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
btn.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
});

var btn = document.querySelector('#showModal1');
var modalDlg = document.querySelector('#image-modal1');
var imageModalCloseBtn = document.querySelector('#image-modal-close1');
btn.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
});
    render() {
        return(
            <nav class="navbar is-mobile" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="Logo.PNG">
              </a>
        {/* <!-- Hamburger --> */}
              <a role="button" id="burger" class="navbar-burger burgeris-mobile" aria-label="menu" aria-expanded="false"
                data-target="navMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
        
            <div id="navbarMenu" class="navbar-menu is-pulled-left is-mobile">
              <div class="navbar-start is-mobile">
                <a href="#" class="navbar-item is-mobile">
                  Home
                </a>
        
                <a href="#" class="navbar-item is-mobile">
                  Documentation
                </a>
                <div class="navbar-item has-dropdown is-hoverable is-mobile">
                  <a href="#" class="navbar-link is-mobile">
                    More
                  </a>
                  <div class="navbar-dropdown is-mobile">
                    <a href="#" class="navbar-item is-mobile">
                      About
                    </a>
                    <a href="#" class="navbar-item is-mobile">
                      Jobs
                    </a>
                    <a href="#" class="navbar-item is-mobile">
                      Contact
                    </a>
                    <hr class="navbar-divider is-mobile">
                    <a href="#" class="navbar-item is-mobile">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
              <div class="navbar-end">
                <div class="navbar-item">
                  <!--Modal-->
                  <div id="image-modal" class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                      <div class="modal-card">
        
                        {/* <!----> */}
                        <article class="message">
                          <div class="message-header">
                            <p>Welcome!</p>
                          </div>
                          <div class="message-body">
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
                    <button id="image-modal-close" class="modal-close"></button>
                  </div>
                  <br>
                  <button class="button" id="showModal">Log In</button>
                </div>
        
                <div class="navbar-item">
                  {/* <!--Modal--> */}
                  <div id="image-modal1" class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                      <div class="modal-card">
        
                        {/* <!----> */}
                        <article class="message">
                          <div class="message-header">
                            <p>Welcome!</p>
                          </div>
                          <div class="message-body">
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
                    <button id="image-modal-close1" class="modal-close"></button>
                  </div>
                  <br>
                  <button class="button" id="showModal1">Sign Up</button>
                </div>
              </div>
        
            </div>
            </div>
          </nav>
        
        
          <!-- Body Grid -->
          <div id="grid" class="container is-mobile">
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-1">1</div>
            </div>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-2">2</div>
            </div>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-3">3</div>
            </div>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-4">4</div>
            </div>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-5">5</div>
            </div>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-6">6</div>
            </div>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-7">7</div>
            </div>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-8">8</div>
            </div>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="cell cell-9">9</div>
            </div>
          </div>

        
          {/* <!-- Footer --> */}
          <footer class="footer">
            <div class="content has-text-centered">
              <i class="fab fa-facebook icon is-large is-primary"></i>
              <i class="fab fa-instagram icon is-large is-primary"></i>
              <i class="fab fa-github icon is-large is-primary"></i>
            </div>
        
            <div class="container">
              <div class="content has-text-centered">
                <div class="fab fa-facebook is-primary"></div>
              </div>
            </div> -->
          </footer>   

        )
    }
}
