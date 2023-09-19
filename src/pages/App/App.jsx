import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
