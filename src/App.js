import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
 
function App() {
  const [mode, setMode] = useState('light');   // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
        setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#00183bff';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtil2" nothing = 'Home' about2 = 'About' mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
