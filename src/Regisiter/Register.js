import React from 'react'
import "./Register.css"

import Logo from "../assets/logo.png"
import Right from "../assets/right.png"

const Register = () => {
  return (
    <div className='wrapper'>
    <div class="container">
      <div className='left'>
      <div className='logo-img'>
      <img className='logo' src={Logo} alt=""/>
      </div>
      <div className='left-paragh'>
       <p className='create'>Create an account</p>
       <p className='reg'>Register on our website with your correct email address and information</p>
      <br/>
       <div className='left-form'>
      <form>
      <label>First Name  </label>
        <input className="input-text" type='text'/>
        <label>Email</label>
        <input className="input-text" type='email'/>
        <label>Phone Number</label>
        <input className="input-text" type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
        <label>Password</label>
        <input 
        className="input-text" 
        type='password'
        />
       <div className='form-radio'>
        <input className="input-radio" type="checkbox" name="Remember me"  value="Remember me" />
        Remember me
        </div>
        <button>Sign up</button>
        </form>
        <div className='left-acct'>
        <p>Already have an account?</p>
        <p className='left-acct-lik'>sign in</p>
        </div>
      </div>
       </div>
      </div>
      <div className='right'>
       <img  id="right-Right-id" className='right-Right' src={Right} alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Register
