import './App.css';
import Navbar from './Components/Navbar';
import Foter from './Components/Foter';
import Proj from './Components/Proj';
import Main from './Components/Main';
import Cont from './Components/Cont';
import NoPage from './Components/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  document.body.style.backgroundImage = "url('wallpaperD.jpg')";
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path='/Main' element={<Main />} />
          <Route path='/Proj' element={<Proj />} />
          <Route path='/Cont' element={<Cont />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Foter />
      </BrowserRouter>
    </>
  );
}

export default App;
