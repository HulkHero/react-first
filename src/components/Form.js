import '../App.css';
import { useState,useEffect } from "react";

import Axios from 'axios';
export const Form=()=>{
    const [name, setname] = useState("")
    const [age, setage] = useState()
    const [username, setusername] = useState("")
    const [user ,setuser]=useState({
        named:"",
        aged:0,
        username:"",
    })

   const onChange1=(val)=>{
    console.log(val.target.value)
    setname(val.target.value)
   }

   const onChange2=(val)=>{
    console.log(val.target.value)
    setage(val.target.value)

}

const onChange3=(val)=>{
    console.log(val.target.value)
    setusername(val.target.value)
   
}
const onClick=()=>{
     
    

    console.log(user)
   
   }

useEffect(() => {
    setuser({
        named:name,
        aged:age,
        username:username
    })

  return () => {
    
  }
}, [name,age,username])

const createUser = () => {
    Axios.post("https://database-hulk.herokuapp.com//createUser", {
      name,
      age,
      username,
    }).then((response) => {
     console.log("hello")
    });
  };
 
    return(
         <>  
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',flexWrap:'wrap'}}>
                   <div style={{borderStyle:"solid",borderRadius:"25px",padding:"25px",marginTop:"10px"}}>
                        <h4 style={{marginBottom:"10px",padding:"10px",marginTop:"10px"}}>Name:</h4>
                        <input type="text" placeholder="enter your name" onChange={onChange1} style={{minHeight:"25px",padding:"10px"}} ></input>
                        <h4 style={{marginBottom:"10px",padding:"10px"}}>Age:</h4>
                        <input type="number" placeholder="enter your age"  onChange={onChange2} style={{minHeight:"25px",padding:"10px"}} ></input>
                         <h4 style={{marginBottom:"10px" ,padding:"10px"}}>email:</h4>
                        <input type="text" placeholder="enter your age" onChange={onChange3} style={{minHeight:"25px",padding:"10px"}} ></input>
                        <div style={{display:'flex',justifyContent:'center' , marginTop:'10px'}}>
                        <button className="btn" style={{minHeight:'40px',position:'center',borderRadius:'10px'}}  onClick={createUser}>submit</button>
                        </div>
                   </div>
            </div>
         
         </>
    )
 
 
 }