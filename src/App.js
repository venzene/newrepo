
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode enabled","success");
  }
  else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Light mode enabled","success");}
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>  
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert} heading="Enter text to analyse"/>
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter text to analyse"/>} />
        </Routes>
      </div>
    </Router>
</>
  );
}

export default App;
