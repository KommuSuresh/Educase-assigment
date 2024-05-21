import React, { Component } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      showPassword: false,
    };
  }

  toggleForm = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin,
    }));
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    return (
      <div className="login-container">
        {this.state.isLogin ? (
          <>
            <h1 className="hello-again">Hello</h1>
            <h1 className="hello-again2">Again!</h1>
            <p className="welcome-back">Welcome back you’ve been missed</p>
            <form className="login-form">
              <label>
                Username*
                <input type="text" name="username" required />
              </label>
              <label>
                Password*
                <div className="password-container">
                  <input 
                    type={this.state.showPassword ? "text" : "password"} 
                    name="password" 
                    required 
                  />
                  <span 
                    className="eye-icon" 
                    onClick={this.togglePasswordVisibility}
                  >
                    {this.state.showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </label>
              <div className="remember-forgot">
              <input type="checkbox" name="remember" className='check'/>
                <label className="remember-me">

                    Remember me
                </label>
                <a href="/forgot-password" className="forgot-password">Forgot the password?</a>
                </div>

              <button type="submit" className="btn-login">Login</button>
            </form>
            <p>or continue with</p>
            <div className="login-alternatives">
             
              <button className="social-login facebook">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/fb-logo-768x432.jpg" alt="Facebook" className="social-icon" />
                Facebook
              </button>
              <button className="social-login google">
                <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="Google" className="social-icon" />
                Google
              </button>
            </div>
            <div className="signup-prompt">
              <p>don’t have an account? <a href="#signup" onClick={this.toggleForm}>Sign Up</a></p>
            </div>
          </>
        ) : (
          <>
            <h1 className="hello-again3">Sign Up</h1>
            <p className="welcome-back">Create a new account</p>
            <form className="login-form">
              <label>
                Username*
                <input type="text" name="username" required />
              </label>
              <label>
                Password*
                <div className="password-container">
                  <input 
                    type={this.state.showPassword ? "text" : "password"} 
                    name="password" 
                    required 
                  />
                  <span 
                    className="eye-icon" 
                    onClick={this.togglePasswordVisibility}
                  >
                    {this.state.showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </label>
              <label>
                Confirm Password*
                <div className="password-container">
                  <input 
                    type={this.state.showPassword ? "text" : "password"} 
                    name="confirm-password" 
                    required 
                  />
                  <span 
                    className="eye-icon" 
                    onClick={this.togglePasswordVisibility}
                  >
                    {this.state.showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </label>
              <button type="submit" className="btn-login">Sign Up</button>
            </form>
            <div className="signup-prompt">
              <p>already have an account? <a href="#login" onClick={this.toggleForm}>Login</a></p>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Login;
