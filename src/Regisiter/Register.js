import React, {useState  } from 'react'
import "./Register.css"
import axios from 'axios'
import {Icon} from "react-icons-kit"
import {eye} from "react-icons-kit/feather/eye"
import Logo from "../assets/logo.png"
import Right from "../assets/right.png"
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [data, setData] = useState({
		firstName: "",
		email: "",
    phone:"",
		password: "",
	});
  
 
  const [error, setError] = useState("");
  const navigate = useNavigate()
	const [msg, setMsg] = useState("")

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://falconlite.com/v1/api/send-email";
			const{ data: res } = await axios.post(url, data);
		setMsg(res.message); 
    navigate("/verify")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
 
  


  return (
    <div className='wrapper'>
    <div class="container">
      <div className='left'>
      <div className='logo-img'>
      <img className='logo' src={Logo} alt=""/>
      </div>
      <div className='left-paragh'>
       <h3 className='create'>Create an account</h3>
       <p className='reg'>Register on our website with your correct email address and information</p>
      <br/>
       <div className='left-form'>
      <form 
      onSubmit={handleSubmit}
        >
      <label>First Name  </label>
        <input className="input-text"
         placeholder='Jeremaih' 
         name="firstName"
         value={data.firstName}
         onChange={handleChange}
         type='text'/>
        <label>Email</label>
        <input className="input-text"
        name="email"
        value={data.email}
        onChange={handleChange}
       /* error={emailerror} */
         placeholder='Fame@gmail.com' type='email'/>
        <label>Phone Number</label>
        <input className="input-text" 
        name="phone"
        placeholder='+2348103769079' 
        value={data.phone}
        onChange={handleChange}
      /*  error={phoneerror} */
        type='tel' 
        /*pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"*/ />
        <label>Password</label>
        <div className="separate-pass">
        <input 
        placeholder=''
        name="password"
        value={data.password}
        onChange={handleChange}
        className="input-text" 
        type='password'
        />
        <span ><Icon icon={eye} size={20}/></span>
        </div>
       <div className='form-radio'>
        <input className="input-radio" type="checkbox" name="Remember me"  value="Remember me" />
       <p className='remem'> Remember me </p>
        </div>
       <br/>
       {error && <div>{error}</div>}
        {msg && <div>{msg}</div>} 
        <button type='submit"'>Sign up</button>
        </form>
        <div className='left-acct'>
        <p className='acct'>Already have an account?</p>
        <p className='left-acct-lik'>Sign in</p>
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
