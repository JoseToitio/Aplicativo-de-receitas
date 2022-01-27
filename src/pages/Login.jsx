import React from 'react';

function Login() {
  return (
    <div>
      <input
        type="email"
        name="email"
        id="email"
        data-testid="email-input"
      />
      <input
        type="password"
        name="password"
        id="password"
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
