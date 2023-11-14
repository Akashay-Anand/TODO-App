// import React from 'react';
import './styleForm.css';

function Signup() {
  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button type="submit">create</button>
          <p className="message">
            Already registered?
            <a href="/login">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
