import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        <h2>LadyBird Voice Studios</h2>
        <Link to='home'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='demos'>Demos</Link>
        <Link to='contact'>Contact</Link>
        </>
    )
}