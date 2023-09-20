import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id='nav-bar'>
            <h2>LadyBird Voice Studios</h2>
            <div id='nav-links'>
                <Link to='home'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='demos'>Demos</Link>
                <Link to='contact'>Contact</Link>
            </div>
        </div>
    )
}