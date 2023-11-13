import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id='nav-bar'>
            <img src='images/ladybird_logo.png' alt='LadyBird Voice Studios Logo and Title'></img>
            <div id='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/demos'>Demos</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}