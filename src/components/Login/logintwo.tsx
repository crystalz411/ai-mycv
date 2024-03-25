import React, { ChangeEvent, FormEvent, useState } from 'react'
import './styles.css'

interface LoginProps {
    setToken: (token: string) => void;
  }

const LoginTwo = (props: LoginProps) => {

    const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);
    const [isNewUser, setIsNewUser] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loginForm, setLoginForm] = useState({
        username: '',
        email: '',
        password: '',
      });

    const handleSignUpClick = () => {
      setIsSignUpMode(true);
      setIsNewUser(true)
    };
  
    const handleSignInClick = () => {
      setIsSignUpMode(false);
      setIsNewUser(false)
    };

    console.log('isNewUser', isNewUser)

    function isValidEmail(email: string): boolean {
        // Basic email format validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const endpoint = isNewUser ? 'http://localhost:5095/signup' : 'http://localhost:5095/token';

    
        // Basic input validation
        if (isNewUser && !loginForm.username || !loginForm.email || !loginForm.password) {
          setErrorMessage('Please fill in all fields');
        } else if (!isNewUser && !loginForm.email || !loginForm.password){
            setErrorMessage('please fill in all fields')
            return;
        }
    
        // Email format validation
        if (!isValidEmail(loginForm.email)) {
          setErrorMessage('Please enter a valid email address');
          return;
        }
    
    
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
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleFormSubmit}>
            
            <h2 className="title">Sign in</h2>
            
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          value={loginForm.email}
              />
            </div>
            
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              />
            </div>
            
            <input type="submit" value="Login" className="btn solid" />
          </form>
          
          
          <form action="#" className="sign-up-form" onSubmit={handleFormSubmit}>
            <h2 className="title">Sign up</h2>
            
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
              onChange={handleChange}
              name='username'
              type="text"
              placeholder="Username"
              value={loginForm.username}
              />
            </div>
            
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input 
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              value={loginForm.email}
              />
            </div>
            
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              />
            </div>
            
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button 
            className="btn transparent" 
            id="sign-up-btn" 
            onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <button 
            className="btn transparent" 
            id="sign-in-btn" 
            onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
    )
}

export default LoginTwo;