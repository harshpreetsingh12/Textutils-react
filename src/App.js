import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React , {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App(){
  const [mode,setMode] = useState('light');
  const [gmode,setgMode] = useState('light');
  const [ymode,setyMode] = useState('light');
   const dtogglemode =()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
    const gtogglemode =()=>{
    if(gmode==='light'){
      setgMode('dark');
      document.body.style.backgroundColor='#198754';
      }
      else{
        setgMode('light');
        document.body.style.backgroundColor='white';
      }
    }
    const ytogglemode =()=>{
      if(ymode==='light'){
        setyMode('dark');
        document.body.style.backgroundColor='#ffc107';
        }
        else{
          setyMode('light');
          document.body.style.backgroundColor='white';
        }
    }
  
  return (
    <>
    {/* <Router> */}
    <Navbar Title="Textutils" /*About="About us"*/ mode={mode} dtogglemode={dtogglemode} gtogglemode={gtogglemode} ytogglemode={ytogglemode}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/About">
            <About/>
          </Route>
              <Route exact path="/"> */}
              <Textform  heading="Enter your text buddy" mode={mode}/>
          {/* </Route>
        </Switch> */}
    {/* <About/>   */}
    </div>
    {/* </Router> */}
   </>
  );
}

export default App;
