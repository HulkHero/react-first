import '../App.css';
import { Link, Outlet } from "react-router-dom"

export const Contact=()=>{

    return(
         <>
         <div style={{margin:10}}>Contact</div>
         <Link className='link' style={{backgroundColor:'dodgerblue',padding:10,textDecoration:'none'}} to='news'>News</Link>
         <Link className='link' style={{backgroundColor:'dodgerblue',padding:10,textDecoration:'none'}} to='info'>info</Link> 
         <div className="contact">
         <Outlet/>
         </div>

        
         </>
 
 
    )
 
 
 }