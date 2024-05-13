import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='main-container' id='home_page'>
            <h1>Welcome to the studio</h1>
            <img src='public\images\studio_view.jpg' id='studio_img'></img>
            <div id='home_guide'>
                <Link to="/about" className="home_button">
                    <button>View Bio</button>
                </Link>
                <Link to="/demos" className="home_button">
                    <button>View Demos</button>
                </Link>
                <Link to="/contact" className="home_button">
                    <button>Contact Me</button>
                </Link>
            </div>
        </div>
    )
}