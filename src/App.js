import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Poster from './Components/poster';
import Skill from './Components/Skill';
import Foter from './Components/Foter';

function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Poster />
        <About />
        <Skill />
      </div>
      <Foter />
    </>
  );
}

export default App;
