import React from 'react'
import { signInUser } from '../../redux/actionCreators/authActionCreator'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
import './LoginForm.css'
const LoginForm = () => {
const[email,setEmail] = React.useState("")
const[password,setPassword] = React.useState("")
const [ success,setSuccess] = React.useState(false)
const navigate = useNavigate()
const dispatch = useDispatch()


const handleSubmit= (e) =>{
  e.preventDefault();
  if(!email || !password){
    toast.error("Please fill in all fields")
    return ; 
  }
  dispatch(signInUser(email,password,setSuccess))
};
React.useEffect(()=>{
  if(success){
    toast.success("Login Successful !")
      navigate("/dashboard")
  }
},[success])

  return (
    <form autoComplete='off' onSubmit={handleSubmit} >
        <div className="form-group my-2">
            <input
                type="email"
                name="email"
                className="form-control my-4"
                placeholder="Email"
                value={email}
                 onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div className="form-group my-2">
            <input
                type="password"
                name="password"
                className="form-control my-4"
                placeholder="Password"
                value={password}
                 onChange={(e)=> setPassword(e.target.value)}
            />
        </div>
      <button type="submit" className='glow-on-hover'>Login</button>
    </form>
  )
}

export default LoginForm

