import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const DataInsert = () => {
  const navigate=useNavigate()

  const[rno,setRno]=useState("")
  const[sname,setSname]=useState("")
  const[mark,setMark]=useState("")
  const[rank,setRank]=useState("")
  const [finres,setFinres]=useState([])

  const dis=(event)=>{
    if(event.target.id==="rno")
      setRno(event.target.value)
    if(event.target.id==="sname")
      setSname(event.target.value)
    if(event.target.id==="mark")
      setMark(event.target.value)
     if(event.target.id==="rank")
      setRank(event.target.value)
  }

  //   const editmes=(event)=>{
    
  //     setRno(event.target.value)
  //   if(event.target.id==="sname")
  //     setSname(event.target.value)
  //   if(event.target.id==="mark")
  //     setMark(event.target.value)
  //    if(event.target.id==="rank")
  //     setRank(event.target.value)
  // }


  const result=()=>{
    const resjson={
             rno:rno,
             sname:sname,
             mark:mark,
             rank:rank
    }
    console.log("My Data As JSON: " ,resjson)
    setFinres([resjson ,...finres])

  }
 
  return (
    <div>
      
      <h1>Student Information - Insert/ Save Form</h1>
   <br></br>
      <input type="text" id="rno" onChange={(ev)=>dis(ev)} value={rno} placeholder='Enter Roll Number:'></input> <br></br>
       <input type="text" id="sname" onChange={(ev)=>dis(ev)} value={sname} placeholder="Enter Your Name:"></input><br></br>
       <input type="text" id="mark" onChange={(ev)=>dis(ev)} value={mark} placeholder="Enter Your Mark:"></input><br></br>
       <input type="text" id="rank" onChange={(ev)=>dis(ev)} value={rank} placeholder="Enter Your Rank:"></input>

       <br></br>
       <button onClick={result}> Array Result</button>


     <button onClick={()=>navigate("/View")}>Goto View</button>   
   {finres.map((item)=>
    <>
    <br></br>

    <h1>Student Mark</h1>
    Roll Number : {item.rno}
    <br></br>
    Student Name: {item.sname}
   <br></br>
    Student Mark: {item.mark}
    <br></br>
    Student Rank :{item.rank}
    <hr size="2" color="cyan" width="100%" allign="left"></hr>
    </>
   )}
    </div>


  )
}

export default DataInsert
