import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <div id='footer'>
        <a href="https://www.instagram.com/ladybirdvoicestudios/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel='noreferrer'>
          <img src='public\images\instagram.png' alt="Instagram" />
        </a>
        <a href='mailto:ladybirdvoicestudios@gmail.com'>ladybirdvoicestudios@gmail.com</a>
        <Link to="/contact">
        <button>Request Quote</button>
        </Link>
      </div>
    );
}