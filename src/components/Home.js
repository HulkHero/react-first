
import { Card } from "./Card"
import { useEffect, useState } from "react"
import Axios from "axios"

export const Home=({route})=>{
    const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("https://database-hulk.herokuapp.com/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  console.log(listOfUsers)

  const createUser = () => {
    Axios.post("https://database-hulk.herokuapp.com/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };
 const onUpdate=(id)=>{
  const newAge=prompt("enter new age")
  Axios.put('https://database-hulk.herokuapp.com/updateUser',{newAge: newAge,id:id}).then(() => {
      setListOfUsers(listOfUsers.map((user)=>{
    
        // eslint-disable-next-line eqeqeq
        return user._id==id? {_id:id,name:user.name,age:newAge,username:user.username} : user
      }))
 })
}  

    
    
   return(
        <>
        <div style={{display:'flex',flexWrap:'wrap',alignContent:'center',justifyContent:"space-around"}}>
            { listOfUsers.map((user)=>{
                return(
                    <Card udata={user} ></Card>
                )
            })
            }
        


        </div>
        </>


   )


}


/*
const [user,setuser]=useState([ ])
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

   

   useEffect( () => {

    const getData= async()=>{    
   await Axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{setuser(response.data)})
   
    }
    getData();
   
   }, [])
   
    

  console.log("daa",user)

*/
