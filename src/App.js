import './App.css';
import Navbar from './Components/Navbar';
import Foter from './Components/Foter';
import Proj from './Components/Proj';
import Main from './Components/Main';
import Cont from './Components/Cont';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path='/Main' element={<Main />} />
          <Route path='/Proj' element={<Proj />} />
          <Route path='/Cont' element={<Cont />} />
        </Routes>
        <Foter />
      </BrowserRouter>
    </>
  );
}

export default App;
