import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLanding = location.pathname === '/';

    return (
        <nav className={`navbar ${isLanding ? 'navbar-transparent' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand" onClick={() => navigate('/')}>
                    <span className="logo-icon">🔁</span>
                    <span className="logo-text">LegacyLoop</span>
                </div>

                <div className="navbar-menu">
                    <a className="nav-link" onClick={() => navigate('/dashboard')}>
                        Marketplace
                    </a>
                    <a className="nav-link" onClick={() => navigate('/wishlist')}>
                        Wishlist
                    </a>
                    <a className="nav-link" onClick={() => navigate('/graduating-soon')}>
                        🎓 Graduating
                    </a>
                    <button onClick={() => navigate('/add-item')} className="btn btn-primary btn-small" id="nav-list-btn">
                        + List Item
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
