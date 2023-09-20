import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Demos from '../Demos/Demos';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/demos" element={<Demos />} />
      </Routes>
    </>
  )
}
