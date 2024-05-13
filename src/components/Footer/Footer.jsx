import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <div id='footer'>
        <a href="https://www.instagram.com/ladybirdvoicestudios/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel='noreferrer'>
          <img src='public\images\instagram.png' alt="Instagram" />
        </a>
        <p>ladybirdvoicestudios@gmail.com</p>
        <Link to="/contact">
        <button>Free Quote</button>
        </Link>
      </div>
    );
}