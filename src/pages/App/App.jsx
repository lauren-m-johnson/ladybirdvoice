import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Demos from '../Demos/Demos';
import Contact from '../Contact/Contact';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import Footer from '../../components/Footer/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
