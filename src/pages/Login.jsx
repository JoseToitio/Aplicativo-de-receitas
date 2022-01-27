import React, { useEffect, useState } from 'react';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (emailValue) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(emailValue);
  };

  useEffect(() => {
    const number = 6;
    if (password.length > number && validateEmail(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password.length, email]);
  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  };
  return (
    <div>
      <input
        type="email"
        name="email"
        id="email"
        value={ email }
        data-testid="email-input"
        onChange={ ({ target }) => {
          setEmail(target.value);
        } }
      />
      <input
        type="password"
        name="password"
        id="password"
        value={ password }
        data-testid="password-input"
        onChange={ ({ target }) => {
          setPassword(target.value);
        } }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleClick }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
