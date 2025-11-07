import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 
function App() {
  const [mode, setMode] = useState('light')   // Whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#00183bff'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtil2" nothing = 'Home' about2 = 'About' mode = {mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm heading="Enter the text to analyse below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
