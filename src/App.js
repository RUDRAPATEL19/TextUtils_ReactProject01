import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="TextUtil2" nothing = 'Home' about2 = 'About'/>
      <div className="container">
      <About/>
      </div>
    </>
  );
}

export default App;
