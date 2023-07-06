import React from 'react';
import "../../styles/form.css";
import { signIn } from 'next-auth/react';
 

const Form = () => {
  return (
    <div id="main-div">
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
        <div id="login-buttons">
        <button id="google-login-button" onClick={()=>signIn('google')} >
          <img src="https://i.ibb.co/cgTYRDJ/google-logo-png-29546.png" alt="Google" width={24} height={24} style={{marginRight:"2px"}} />
        <span>Sign in with Google</span>
        </button>
        <button id="google-login-button">
          <img src="https://i.ibb.co/ykw4txp/apple-1-3x.png" alt="Apple" width={18} height={20} style={{marginRight:"5px"}} />
        <span>Sign in with Apple</span>
        </button>
        </div>
        <div id="form">
          <label htmlFor="">Email address</label>
          <input type="email" id="input" />
          <br/>
          <label htmlFor="">Password</label>
          <input type="password" id="input" />
          <p id="forget">Forgot Password?</p>
          <button onClick={()=>alert("Please use Sign In with Google Button")} >Sign In</button>
        </div>
        <p id="no-account">Don't have an account?<span id="forget"> Register here</span></p>
    </div>
  )
}

export default Form