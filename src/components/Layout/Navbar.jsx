import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand" onClick={() => navigate('/dashboard')}>
                    <span className="logo-icon">🔄</span>
                    <span className="logo-text">LegacyLoop</span>
                </div>

                <div className="navbar-menu">
                    <button onClick={() => navigate('/dashboard')} className="btn btn-secondary btn-small">
                        Dashboard
                    </button>
                    <button onClick={() => navigate('/wishlist')} className="btn btn-secondary btn-small">
                        Wishlist
                    </button>
                    <button onClick={() => navigate('/graduating-soon')} className="btn btn-secondary btn-small">
                        🎓 Graduating
                    </button>
                    <button onClick={() => navigate('/add-item')} className="btn btn-primary btn-small">
                        + List Item
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
