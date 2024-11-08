import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Poster from './Components/poster';
import Skill from './Components/Skill';

function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Poster />
        <About />
        <Skill />
      </div>
    </>
  );
}

export default App;
