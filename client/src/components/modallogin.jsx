import React, { Component } from 'react';

class ModalLogin extends Component {
  render() {
    return (
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
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
  <button class="modal-close is-large" aria-label="close"></button>
</div>
    )
  }
}
export default ModalLogin;