import React from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1>Thia is View Component</h1>
      <button onClick={()=>navigate("/ContactUs")}>ContactUs</button>
  <input type="button" onClick={()=>navigate(-1)} value="Back"></input>
    </div>
  )
}

export default View
