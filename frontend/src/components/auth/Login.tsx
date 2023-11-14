// import React from 'react';
import './styleForm.css';

function Login() {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="submit">login</button>
          <p className="message">
            Not registered?
            <a href="/signup">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
