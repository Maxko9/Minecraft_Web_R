import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/"> Crossroads</Link>
            <Link to="/history"> Historie</Link>
            <Link to="/skins"> Skiny</Link>
            <Link to="/backgrounds"> Pozadí</Link>
        </nav>
    );
}