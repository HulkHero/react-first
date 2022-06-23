import '../App.css'
import {Link} from 'react-router-dom'

export const NavBar =()=>{


    return(
        <>
        <div style={{display:'flex',flex:"1",flexWrap:"wrap",backgroundColor:'blue',color:'white',textDecoration:'none'}}>
            <div className="nav" ><Link className='link'  to='/'>Home </Link></div>
            <div className="nav"><Link  className='link'to='/about'>About</Link></div>
            <div className="nav"><Link  className='link'to='/contact'>Contact</Link></div>
            <div className="nav"><Link  className='link'to='/form'>Form</Link></div>
    
            <div className='sea nav' style={{position:'absolute',right:'5%',padding: "10px",}}>search</div>
 
        </div>
        </> 
    )
}
