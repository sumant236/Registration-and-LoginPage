import React from 'react'
import "./Homepage.css"

export const Homepage = ({setLoggedIn}) => {
  return (
    <div className='homepage'>
        <h1>Homepage</h1>
        <div><button className='btn' onClick={()=>setLoggedIn({})}>Log out</button></div>
    </div>
  )
}
