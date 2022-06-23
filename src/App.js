
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Home } from './components/Home';
import {Contact} from './components/Contact'
import {About} from './components/About'
import {Form} from './components/Form'
import News from './components/News';
import Info from './components/Info';
function App() {
    

  return (
    <>
       <Router>
      <NavBar/>
       <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}>
          <Route path='news' element={<News/>}/>
          <Route path='info' element={<Info/>}/>
        </Route>
        <Route path='/form' element={<Form/>}></Route>
       </Routes>
      </Router>

    </>

     
  );
}

export default App;




/*
<div style={{display:"flex",backgroundColor:"red",height:'100%'}}>

<div style={{display:"flex",justifyContent:"space-around",backgroundColor:'blue',alignItems:"center"}}>
  <div style={{flex:"1",width:"200px",height:"200px",backgroundColor:"yellow"}}>hello</div>
  <div style={{width:"200px",height:"700px",backgroundColor:"green"}} >hello2</div>
</div>
</div>
*/