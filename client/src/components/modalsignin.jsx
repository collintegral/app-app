import React, { Component } from 'react';

class ModalSignin extends Component {
  render() {
    return (
      <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
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
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    )
  }
}
export default ModalSignin;