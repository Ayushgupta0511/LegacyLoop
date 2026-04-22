import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WishlistBoard.css';

const WishlistBoard = () => {
    const navigate = useNavigate();
    const [wishlists, setWishlists] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        itemWanted: '',
        description: '',
        category: ''
    });

    useEffect(() => {
        fetchWishlists();
    }, []);

    const fetchWishlists = () => {
        // Load from localStorage
        const stored = JSON.parse(localStorage.getItem('legacyloop_wishlists') || '[]');

        if (stored.length > 0) {
            setWishlists(stored);
        } else {
            // Demo data
            setWishlists([
                {
                    id: '1',
                    itemWanted: 'Calculus Textbook (3rd Edition)',
                    description: 'Looking for the latest edition, willing to pay up to $30',
                    category: 'academic',
                    userName: 'Neha Singh',
                    userYear: '2nd Year'
                },
                {
                    id: '2',
                    itemWanted: 'Mini Fridge',
                    description: 'Any working condition, for dorm room',
                    category: 'dorm',
                    userName: 'Varun Desai',
                    userYear: '1st Year'
                }
            ]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWishlist = {
            id: Date.now().toString(),
            ...formData,
            userName: 'Aarav Mehta',
            userYear: '3rd Year',
            createdAt: new Date().toISOString()
        };

        const updated = [...wishlists, newWishlist];
        setWishlists(updated);
        localStorage.setItem('legacyloop_wishlists', JSON.stringify(updated));

        setShowForm(false);
        setFormData({ itemWanted: '', description: '', category: '' });
    };

    return (
        <div className="wishlist-page">
            <div className="wishlist-header">
                <button className="btn-back" onClick={() => navigate('/dashboard')}>
                    ← Back to Dashboard
                </button>
                <h1>Wishlist Board</h1>
                <p>Post what you're looking for or help others find items</p>
            </div>

            <button
                className="btn btn-primary"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? 'Cancel' : '+ Post a Request'}
            </button>

            {showForm && (
                <form onSubmit={handleSubmit} className="wishlist-form">
                    <div className="form-group">
                        <label>What are you looking for?</label>
                        <input
                            type="text"
                            value={formData.itemWanted}
                            onChange={(e) => setFormData({ ...formData, itemWanted: e.target.value })}
                            required
                            placeholder="e.g., Physics Lab Manual"
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows="3"
                            placeholder="Add details like edition, condition, price range..."
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="academic">📚 Academic</option>
                            <option value="clothing">👕 Clothing</option>
                            <option value="dorm">🛏️ Dorm Essentials</option>
                            <option value="hobbies">🎸 Hobbies</option>
                            <option value="electronics">💻 Electronics</option>
                            <option value="kitchen">🍳 Kitchen</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Post Request</button>
                </form>
            )}

            <div className="wishlists-grid">
                {wishlists.map(wishlist => (
                    <div key={wishlist.id} className="wishlist-card">
                        <h3>{wishlist.itemWanted}</h3>
                        <p>{wishlist.description}</p>
                        <div className="wishlist-meta">
                            <span className="category-badge">{wishlist.category}</span>
                            <span className="user-info">{wishlist.userName} • {wishlist.userYear}</span>
                        </div>
                        <button className="btn btn-secondary btn-small">I have this!</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistBoard;
