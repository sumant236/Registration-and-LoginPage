import React from 'react'
import { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';


export const Register = () => {
    const [active, setActive] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phoneNo: "",
        password: "",
        confirmPwd: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetails({
            ...userDetails,
            [name] : value
        })
    }

    const handleRegister = (e) => {
        const { name, email, phoneNo, password, confirmPwd } = userDetails;
        // console.log(userDetails)
        if(name && email && phoneNo && password && (password === confirmPwd)){
            fetch("http://localhost:8000/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    userDetails
                )
            })
            .then(res=>res.json())
            .then(res=>alert(res.message))
            setActive(true);
        }
        else{
            alert("Invalid Input, Please re-enter your correct details")
        }
        setUserDetails({
            name: "",
            email: "",
            phoneNo: "",
            password: "",
            confirmPwd: ""
        })
    }
  return (
    <div className='register'>
        <h1>Registration Page</h1>
        <TextField fullWidth id="fullWidth" margin="dense" size="small" name="name" value= {userDetails.name} label='Enter Your Full Name' onChange={handleChange}/>
        <TextField fullWidth id="fullWidth" margin="dense" size="small" name="email" value= {userDetails.email} label='Enter Your Email' onChange={handleChange}/>
        <TextField fullWidth id="fullWidth" margin="dense" size="small" name="phoneNo" value= {userDetails.phoneNo} label='Enter Your Phone Number' onChange={handleChange}/>
        <TextField fullWidth id="fullWidth" margin="dense" size="small" name="password" value= {userDetails.password} label='Enter Your Password' onChange={handleChange}/>
        <TextField fullWidth id="fullWidth" margin="dense" size="small" name="confirmPwd" value= {userDetails.confirmPwd} label='Confirm Your Password' onChange={handleChange}/>
        <div><button className='btn' onClick={handleRegister}>Register</button></div>
        <div>OR</div>
        <div><Link to='/login'><button className='btn'>Login</button></Link></div>
    </div>
  )
}
