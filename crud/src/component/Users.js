import React from 'react'
import  {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

export default function GitId() {
    const navigate=useNavigate()
    const [data ,setData]=useState([])
    
    useEffect(()=>{
        axios.get(`https://62d3e350cd960e45d44f7d3a.mockapi.io/api`)
        .then(res=>{
            console.log(res.data)
           
            setData(res.data)
            navigate("/Users")
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    //update
    const setUpdate=(e)=>{
        let {id ,firstName,lasttName}=e
        localStorage.setItem("id",id)
        localStorage.setItem("username",firstName)
        localStorage.setItem("password",lasttName)

    }
 //delete
  const getData=()=>{
    axios.get(`https://62d3e350cd960e45d44f7d3a.mockapi.io/api`).then(getData=>{setData(getData.data)})
  }
  const onDelete =(id)=>{
    axios.delete(`https://62d3e350cd960e45d44f7d3a.mockapi.io/api/${id}`)
    .then(()=>{
        getData()


    })

  }
  return (
    <div>
        <ul>
            {data.map(e=>(
                <>
                <li >{e.username} </li>
                <li> {e.password}</li>
                <Link to="/Uodate">
                <button onClick={setUpdate(e)}>update</button>
                </Link>
                <button onClick={()=>{onDelete(e.id)}}>Delete</button>

                
                </>

            ))}
        </ul>

    </div>
  )
}
