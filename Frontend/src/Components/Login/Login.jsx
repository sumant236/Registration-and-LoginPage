import React from 'react'
import { useState } from 'react'
import "./Login.css"
import TextField from '@mui/material/TextField';

export const Login = ({setLoggedIn}) => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleLogin = () => {
        const {email , password} = userDetails;
        fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                userDetails
            )
        })
        .then(res =>res.json())
        .then(res=>{
            alert(res.message)
            setLoggedIn(res.user)
        })
    }
  return (
    <div className='login'>
        <h1>Login Page</h1>
        <TextField fullWidth id="fullWidth" margin="dense" size="small" type="text" name="email" value={userDetails.email} onChange={handleChange} label='Enter Your Email' />
        <TextField fullWidth id="fullWidth" margin="dense" size="small" type="password" name="password" value={userDetails.password} onChange={handleChange} label='Enter Your Password' />
        <div><button className='btn' onClick={handleLogin}>Login</button></div>
    </div>
  )
}
