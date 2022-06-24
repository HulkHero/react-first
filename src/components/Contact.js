import '../App.css';
import { Link, Outlet } from "react-router-dom"
import { useState } from 'react';

export const Contact=()=>{

    const [toggle,settoggle]=useState(true)

    const onClick=()=>{
     settoggle(toggle==true?false:true)
    }
    return(
         <>
         <div><button onClick={onClick} >toggle</button></div>
         {toggle==true?<div>hello contact</div> : <div></div>  }
         <div style={{margin:10}}>Contact</div>
         <Link className='link' style={{backgroundColor:'dodgerblue',padding:10,textDecoration:'none'}} to='news'>News</Link>
         <Link className='link' style={{backgroundColor:'dodgerblue',padding:10,textDecoration:'none'}} to='info'>info</Link> 
         <div className="contact">
         <Outlet/>
         </div>

        
         </>
 
 
    )
 
 
 }