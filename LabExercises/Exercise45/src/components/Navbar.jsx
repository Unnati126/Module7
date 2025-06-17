import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="fixed" color="default" elevation={2}>
            <Toolbar sx={{ justifyContent: "center", gap: 3 }}>

                <Button component={Link} to="/" color="primary" variant="text">
                    Home
                </Button>

                <Button component={Link} to="/login" color="primary" variant="text">
                    Login
                </Button>

                <Button component={Link} to="/bitcoin" color="primary" variant="text">
                    Bitcoin Rates
                </Button>
                
            </Toolbar>   
        </AppBar>
    );
}

/*function Navbar() {
    return (
    <nav style={{ display: 'flex', gap: '4rem', padding: '1rem', background: '#eee', position: 'fixed' }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/bitcoin">Bitcoin Rates</Link>
    </nav>
    );
}*/

export default Navbar;