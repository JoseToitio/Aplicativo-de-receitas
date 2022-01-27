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
    <div
      className="flex bg-green-600 w-screen h-screen
      items-center text-center"
    >
      <form
        className="bg-green-200 shadow-md rounded px-8 pt-6 pb-8
        mb-4 mx-4 grid justify-items-center"
      >
        <span className="text-3xl">LOGIN</span>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              value={ email }
              data-testid="email-input"
              type="email"
              placeholder="Email"
              onChange={ ({ target }) => {
                setEmail(target.value);
              } }
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
            <input
              className="shadow appearance-none border border-red-500 rounded w-full
              py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
              focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={ password }
              data-testid="password-input"
              onChange={ ({ target }) => {
                setPassword(target.value);
              } }
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded focus:outline-none focus:shadow-outline"
            type="button"
            data-testid="login-submit-btn"
            disabled={ disabled }
            onClick={ handleClick }
          >
            Enter
          </button>
        </div>
      </form>

    </div>
  );
}

export default Login;
