import React, {useState }  from 'react'
import "./Verify.css"
import axios from "axios"
import Right from "../assets/right.png"
import Logo from "../assets/logo.png"
import CodeInput from '../CodeInput/CodeInput'


const Verify = () => {
  const [success, setsuccess] = useState(false)
  const [errorMsg, seterrorMsg] = useState(false)

    
  const handleSubmit = async code => {
    await axios
      .post(`https://falconlite.com/v1/api/verify-email`, { code })
      .then(res => {
        if (res.status === 200) {
          setsuccess(true)
        } else {
          setsuccess(false)
          seterrorMsg(res)
        }
      })
      .catch(err => {
        seterrorMsg(err.response.data.message)
        setsuccess(false)
      })
  }

  return (
    <div className='wrapper'>
    {!success ? (
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
        <CodeInput
        onComplete={code => {
          handleSubmit(code)
        }}
        />
        </div>
      <div className='right'>
      <img  id="right-Right-id" className='right-Right' src={Right} alt=""/>
      </div>
      </div>
      ) : (
        <div>
        <p>Email verification successful</p>
        </div>
          )}
    </div>
  )
}

export default Verify
