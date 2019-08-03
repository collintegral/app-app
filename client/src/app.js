import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-mobile" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="/assets/images/Logo.png" />
            </a>
          </div>
          {/* Hamburger */}
          {/* <a role="button" id="burger" className="navbar-burger burgeris-mobile" aria-label="menu" aria-expanded="false"
          data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>}
      </div> */}
          <div id="navbarMenu" className="navbar-menu is-pulled-left is-mobile">
            <div className="navbar-start is-mobile">
              <div className="navbar-item is-hoverable is-mobile">
                <a href="#" className="navbar is-mobile">
                  The App-App
                </a>
                <div className="navbar is-mobile">
                  <a href="#" className="navbar-item is-mobile">
                  </a>
                  <hr className="navbar-divider is-mobile" />
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                {/* <!--Modal--> */}
                <div id="image-modal" className="modal" modalDlg={document.querySelector('#image-modal')}>
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <div className="modal-card">
                      {/* <!----> */}
                      <article className="message">
                        <div className="message-header">
                          <p>Welcome!</p>
                        </div>
                        <div className="message-body">
                          <form action="/api/login" method="post">
                            <div>
                              <label>Email:</label>
                              <input type="text" name="email" id="loginemail" />
                            </div>
                            <div>
                              <label>Password:</label>
                              <input type="password" name="password" id="loginpassword" />
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
                  <button id="image-modal-close" className="modal-close" imageModalCloseBtn={document.querySelector('#image-modal-close')}></button>
                </div>
                <br />

                <button className="button" id="showModal"  btn={document.querySelector('#showModal')}
                  {btn.addEventListener('click', () => {
                    modalDlg.classList.add('is-active')
                  })}>
                  Log In
                  </button>

                <button className="button modal-button" id="showModal">Log In</button>

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
                          <p>Create Your Free Account</p>
                        </div>
                        <div className="message-body">
                          <form id="sign-up-form">
                            <div>
                              <label>Email:</label>
                              <input type="text" name="email" id="email" />
                            </div>
                            <div>
                              <label>Username:</label>
                              <input type="text" name="username" id="username" />
                            </div>
                            <div>
                              <label>Password:</label>
                              <input type="password" name="password" id="password" />
                            </div>
                            <div>
                              <label>Confirm Password:</label>
                              <input type="password" name="confpassword" id="confpassword" />
                            </div>
                            <div>
                              <input type="submit" value="Sign Up" id="sign-up-btn" />
                            </div>
                          </form>
                          <p id="errors"></p>
                        </div>
                      </article>
                      {/* <!----> */}
                    </div>
                  </div>
                  <button id="image-modal-close1" className="modal-close"></button>
                </div>
                
                <br />
                <button className="button modal-button" id="showModal1">Sign Up</button>
              </div>
            </div>
          </div>
        </nav >
        {/* <!--Will be draggable components, static for now--> */}
        < nav className="navbar is-mobile" role="navigation" aria-label="main navigation" >
          {/* <!-- Hamburger --> */}

          < a role="button" id="burger" className="navbar-burger burger is-mobile" aria-label="menu" aria-expanded="false"

            data-target="navMenu" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a >

          {/* menu */}
          <aside className="menu">
            <p className="menu-label">
              Components
            </p>
            <ul className="menu-list">
              {/* navbar */}
              <li>
                <a href="#" className="is-mobile is-hoverable" onDragStart="dragStart(event)" onDrag="dragging(event)" draggable="true" id="dragTarget">
                  Navbar
                </a>
              </li>
              {/* message box */}
              <li>
                <a href="./components/message.js" className="is-mobile is-hoverable" onDragStart="dragStart(event)" onDrag="dragging(event)" draggable="true" id="dragTarget">
                  Message
                </a>
              </li>
              {/* card */}
              <li>
                <a href="./components/card.jsx" className="is-mobile is-hoverable" onDragStart="dragStart(event)" onDrag="dragging(event)" draggable="true" id="dragTarget">
                  Card
                </a>
              </li>
              {/* hero */}
              <li>
                <a href="./components/hero.jsx" className="is-mobile is-hoverable" onDragStart="dragStart(event)" onDrag="dragging(event)" draggable="true" id="dragTarget">
                  Hero
                </a>
              </li>
              {/* container */}
              <li>
                <a href="./components/container.jsx" className="is-mobile is-hoverable" onDragStart="dragStart(event)" onDrag="dragging(event)" draggable="true" id="dragTarget">
                  Container
              </a>
              </li>
              {/* image box */}
              <li>
                <a href="./components/image-box.jsx" className="is-mobile is-hoverable" onDragStart="dragStart(event)" onDrag="dragging(event)" draggable="true" id="dragTarget">
                  Image Box
                </a>
              </li>
              {/* footer */}
              <li>
                <a href="#" className="is-mobile is-hoverable" onDragStart="dragStart(event)" onDrag="dragging(event)" draggable="true" id="dragTarget">
                  Footer
                </a>
              </li>
            </ul>
          </aside>      
          {/* <!-- Body Grid --> */}
  <div className="level is-mobile">
  <div className="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">
{/* Row One */}
   <div className="columns">
  <div className="box is-9  cell-1">
    First column
  </div>
  <div className="box is-9 cell-2">
    Second column
  </div>
  <div className="box is-9 cell-3">
    Third column
  </div>
</div>
<div className="columns">
  {/* Row Two */}
  <div className="box is-9 cell-4">
    First column
  </div>
  <div className="box is-9 cell-5">
    Second column
  </div>
  <div className="box is-9 cell-6">
    Third column
  </div>
  {/* Row Three */}
</div><div className="columns">
  <div className="box is-9 cell-7">
    First column
  </div>
  <div className="box is-9 cell-8">
    Second column
  </div>
  <div className="box is-9 cell-9">
    Third column
  </div>

</div>

  </div>

   </div>

          {/* <!-- Footer --> */}
          {/* < footer className="footer" >
            <div className="content has-text-centered">
              <i className="fab fa-facebook icon is-large is-primary"></i>
              <i className="fab fa-instagram icon is-large is-primary"></i>
              <i className="fab fa-github icon is-large is-primary"></i>
            </div>
          </footer > */}
        </nav>

      </div >
    )
  }
}

export default App;

