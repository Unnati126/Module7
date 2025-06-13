import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav style={{ display: 'flex', gap: '4rem', padding: '1rem', background: '#eee', position: 'fixed' }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/bitcoin">Bitcoin Rates</Link>
    </nav>
    );
}

export default Navbar;