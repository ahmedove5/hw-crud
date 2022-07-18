import React from 'react'
import  { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"


export default function Creat() {
    const navigate=useNavigate()
    const [username , setUserName] = useState("") 
    const [password , setPassword] = useState("") 
    const handeleSubmit = (e) =>{ 
        e.preventDefault() 
        console.log("submitted from ----->>") 
        axios.post('https://62d3e350cd960e45d44f7d3a.mockapi.io/api',{ 
            username: username, 
            password : password 
        }) 
        .then((response)=>{ 
            console.log(response.data) 
            navigate("/Users")
   alert("Successfully LoggeIn") 
             
        }) 
        .catch((err)=>{ 
            console.log(err) 
            console.log(err.response) 
            alert(err.response.data.error.message) 
        }) 
    } 
    const handelUsername = (e)=>{ 
        console.log(e.target.value) 
        setUserName(e.target.value) 
    } 
    const handelPassword = (e)=>{ 
        setPassword(e.target.value) 
    } 
     
  return ( 
    <div> 
        <h1 className='col-sm-6  offset-sm-3'>Login Page</h1> 
        <form onSubmit={handeleSubmit}> 
            <label>Username</label> 
            <input type="text" value={username} onChange={handelUsername} name="username" placeholder="Enter Username" required/><br/> 
            <label>Password</label> 
            <input type="password" value={password} onChange={handelPassword} name="password" placeholder="Enter Password" required/><br/> 
            <input type="submit" value="Login"/> 
        </form> 
    </div>
  )
    

  
}
