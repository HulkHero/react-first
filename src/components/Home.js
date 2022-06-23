
import { Card } from "./Card"
import { useEffect, useState } from "react"

export const Home=({route})=>{
    const [object,setobject]=useState([
        {
            name:"Hammad",
            age:21,
            email:"zhammad",
            image:"https://picsum.photos/200/100"
        },
        {
            name:"Hulk",
            age:51,
            email:"zhulk",
            image:"https://picsum.photos/200/100"

        },
        {
        name:"Saad",
        age:21,
        email:"Saadi",
        image:"https://picsum.photos/200/100"
        }


    ])
    



    
   return(
        <>
        <div style={{display:'flex',flexWrap:'wrap',alignContent:'center',justifyContent:"space-around"}}>
            { object.map((user)=>{

                return(
                    <Card user={user} ></Card>
                )

            })
            }
        


        </div>
        </>


   )


}