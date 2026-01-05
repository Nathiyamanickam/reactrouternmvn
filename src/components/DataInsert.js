import React from 'react'
import { useNavigate } from 'react-router-dom'

const DataInsert = () => {
  const navigate=useNavigate()
  return (
    <div>
      
      <h1>This is Datainsert Component</h1>
   <br></br>
     <button onClick={()=>navigate("/View")}>Goto View</button>   
    </div>

  )
}

export default DataInsert
