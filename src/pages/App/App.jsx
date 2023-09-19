import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <h1>Welcome</h1>
    </>
  )
}
