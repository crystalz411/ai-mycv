import React, { ChangeEvent, FormEvent, useState } from "react";
import meshGradient from "./mesh-gradient.png";
// import BluePurpleLogo from './Blue-and-Purple-Elegant-Tech-Logo.png'
import Logo from "./logo.png";
import "./loginStyles.css";

interface LoginProps {
  setToken: (token: string) => void;
}

const LoginThree = (props: LoginProps) => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [isNewUser, setIsNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function isValidEmail(email: string): boolean {
    // Basic email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = isNewUser
      ? "http://localhost:5095/signup"
      : "http://localhost:5095/token";

    if (!loginForm.email || !loginForm.password) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    if (!isValidEmail(loginForm.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    fetch(endpoint, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
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
          setErrorMessage(responseData.msg || "An error occurred");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred");
      });

    setLoginForm({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setErrorMessage("");
    const { value, name } = event.target;
    setLoginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <div className="container-fits">
      <div>
        <div className="form-section">
          <div className="form-wrapper">
            <div className="logo-container">
              <a href="#" className="logo-container">
                <img src={Logo} alt="Logo" />
              </a>
            </div>

            <h2>{isNewUser ? "Welcome! 👋🏻" : "Welcome Back! 👋🏻"}</h2>
            <p>Enter your credentials to access your account.</p>

            {isNewUser ? (
              <form className="login" onSubmit={handleFormSubmit}>
                <div className="input-container">
                  <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input
                      type="username"
                      id="username"
                      autoComplete="off"
                      onChange={handleChange}
                      name="username"
                      placeholder="username"
                      value={loginForm.username}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      onChange={handleChange}
                      name="email"
                      placeholder="Email"
                      value={loginForm.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={handleChange}
                      name="password"
                      placeholder="Password"
                      value={loginForm.password}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="remember-forgot">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      value="remember-me"
                      id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>

                  <a href="#">Forgot password?</a>
                </div>

                <a href="/cover-letter" className="login-btn" type="submit" >
                  Sign Up
                </a>
              </form>
            ) : (
              <form className="login" onSubmit={handleFormSubmit}>
                <div className="input-container">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      onChange={handleChange}
                      name="email"
                      placeholder="Email"
                      value={loginForm.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={handleChange}
                      name="password"
                      placeholder="Password"
                      value={loginForm.password}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="remember-forgot">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      value="remember-me"
                      id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>

                  <a href="#">Forgot password?</a>
                </div>

                <a href="/cover-letter" className="login-btn" type="submit">
                  Log In
                </a>
              </form>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <div className="or-divider">or</div>
            <p
              className="login-signup"
              onClick={() => {
                setIsNewUser(!isNewUser);
                setErrorMessage("");
              }}
            >
              {isNewUser
                ? "Already have an account? Login"
                : "New User? Sign Up"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginThree;
