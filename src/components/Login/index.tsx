import React, { useState, ChangeEvent, FormEvent } from 'react';

interface LoginProps {
  setToken: (token: string) => void;
}

function Login(props: LoginProps): JSX.Element {
  const [loginForm, setLoginForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isNewUser, setIsNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function isValidEmail(email: string): boolean {
    // Basic email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // Basic input validation
    if (!loginForm.username || !loginForm.email || !loginForm.password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Email format validation
    if (!isValidEmail(loginForm.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    const endpoint = isNewUser ? 'http://localhost:5095/signup' : 'http://localhost:5095/token';

    fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginForm.username,
        email: loginForm.email,
        password: loginForm.password,
      }),
    })
      .then(async (response) => {
        const responseData = await response.json();
        if (response.ok) {
          props.setToken(responseData.access_token);
        } else {
          setErrorMessage(responseData.msg || 'An error occurred');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred');
      });

    setLoginForm({
      username: '',
      email: '',
      password: '',
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setErrorMessage('');
    const { value, name } = event.target;
    setLoginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>{isNewUser ? 'Sign Up' : 'Login'}</h1>
      <form className="login" onSubmit={handleFormSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Username"
          value={loginForm.username}
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          value={loginForm.email}
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          value={loginForm.password}
        />
        <button type="submit">{isNewUser ? 'Sign Up' : 'Login'}</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser ? 'Already have an account? Login' : 'New User? Sign Up'}
      </p>
    </div>
  );
}

export default Login;
