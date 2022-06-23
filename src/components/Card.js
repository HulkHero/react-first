import '../App.css';
export const Card=({user})=>{
    const {name,age,email,image}=user
    

    return(
         <>
         <div style={{borderStyle:"solid", borderRadius:"10px",borderColor:"DodgerBlue",margin:"15px" ,padding:"10px" }} >
         <div><img src={image} ></img></div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Email: {email}</div>
         </div>
         </>
    )
 }