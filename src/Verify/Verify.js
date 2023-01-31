import React from 'react'
import "./Verify.css"
import Right from "../assets/right.png"
import Logo from "../assets/logo.png"

const Verify = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
      <div className='lesser'>
      <div className='logo-img'>
      <img className='logo' src={Logo} alt=""/>
      </div>
      <h1>Kindly enter Email Verification code</h1>
     <p className='ver-parag'>To Sign up, kindly enter the verification code sent to your email address</p>
     <br/>
       <br/>
       <br/>
     <div className='wrap-less'>
      <form>
        <input className='less-input' type="text" maxlenght="1"/>
        <input className='less-input' type="text" maxlenght="1"/>
        <input className='less-input' type="text" maxlenght="1"/>
        <input className='less-input' type="text" maxlenght="1"/>
        <input className='less-input' type="text" maxlenght="1"/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        <div>
        <button>Proceed</button>
        </div>
        </form>
        </div>
        </div>
      <div className='right'>
      <img  id="right-Right-id" className='right-Right' src={Right} alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Verify
