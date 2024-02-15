import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Allposts from './components/Allposts';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<About/>} path='/about' />
          <Route element={<Allposts />} path='/search' />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
