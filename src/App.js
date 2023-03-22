
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="black";
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      setAlert(null)
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text/Convertor" about="AboutThis"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container'>
        
      <Routes>
          <Route exact path="/about" element={<About />} />
          
          <Route exact path="/" element={<TextForm head="JO LIKHNA HAI YAHA LIKHO" mode={mode} showAlert={showAlert}/>} />
            
      </Routes>
        
      </div>
    </Router>
      
    </>
  );
}

export default App;
