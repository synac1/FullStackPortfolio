import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import {Layout } from './components/Layout';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function MyRoutes(){
  // Need to add more routes and path
  return(
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

const Header = ()=>{
  const [emotion, setEmotion]= useState("sad");
  const [headerColor, setHeaderColor] = useState("#282c34");
  const HandleColor = (v)=>{
    setHeaderColor(v);
  }
  useEffect(()=>{
    let headerToChange = document.getElementById("header_ID");
    headerToChange.style.backgroundColor= headerColor;
  }, [headerColor])

  return(
      <header id="header_ID" className="App-header">
        <NavBar />
        Hello from the other side
        <p>You have chose {emotion}</p>
        <button onClick={()=>setEmotion("Happy")}>Change mood</button>
        <input type='color' onChange={(e)=>HandleColor(e.target.value)} />
      </header>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
