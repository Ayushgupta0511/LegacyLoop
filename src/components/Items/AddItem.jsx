import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddItem.css';

const AddItem = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        section: '',
        condition: 'good',
        price: '',
        isFree: false,
        meetupPreference: '',
        isGraduatingSoon: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Store item in localStorage for demo purposes
            const existingItems = JSON.parse(localStorage.getItem('legacyloop_items') || '[]');
            const newItem = {
                id: Date.now().toString(),
                ...formData,
                price: formData.isFree ? 0 : parseFloat(formData.price),
                images: ['https://via.placeholder.com/300x200?text=' + encodeURIComponent(formData.title)],
                sellerName: 'Demo User',
                sellerYear: '3rd Year',
                sellerDepartment: 'Computer Science',
                sellerHostel: 'Hall A',
                status: 'available',
                createdAt: new Date().toISOString()
            };
            existingItems.push(newItem);
            localStorage.setItem('legacyloop_items', JSON.stringify(existingItems));

            alert('Item listed successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error adding item:', error);
            alert('Failed to list item. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-item-page">
            <div className="add-item-header">
                <button className="btn-back" onClick={() => navigate('/dashboard')}>
                    ← Back to Dashboard
                </button>
                <h1>List an Item</h1>
            </div>

            <form onSubmit={handleSubmit} className="add-item-form">
                <div className="form-group">
                    <label>Item Title *</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Data Structures Textbook"
                    />
                </div>

                <div className="form-group">
                    <label>Description *</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        placeholder="Describe the item's condition, features, etc."
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Section *</label>
                        <select name="section" value={formData.section} onChange={handleChange} required>
                            <option value="">Select Section</option>
                            <option value="peer-to-peer">Peer-to-Peer</option>
                            <option value="faculty-staff">Faculty/Staff</option>
                            <option value="lost-found">Lost & Found</option>
                            <option value="free-giveaway">Free Giveaway</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Category *</label>
                        <select name="category" value={formData.category} onChange={handleChange} required>
                            <option value="">Select Category</option>
                            <option value="academic">📚 Academic</option>
                            <option value="clothing">👕 Clothing</option>
                            <option value="dorm">🛏️ Dorm Essentials</option>
                            <option value="hobbies">🎸 Hobbies</option>
                            <option value="electronics">💻 Electronics</option>
                            <option value="kitchen">🍳 Kitchen</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Condition *</label>
                        <select name="condition" value={formData.condition} onChange={handleChange} required>
                            <option value="new">New</option>
                            <option value="like-new">Like New</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            disabled={formData.isFree}
                            min="0"
                            step="0.01"
                            placeholder="0.00"
                        />
                    </div>
                </div>

                <div className="form-group checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            name="isFree"
                            checked={formData.isFree}
                            onChange={handleChange}
                        />
                        This is a free giveaway
                    </label>
                </div>

                <div className="form-group checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            name="isGraduatingSoon"
                            checked={formData.isGraduatingSoon}
                            onChange={handleChange}
                        />
                        I'm graduating soon (bulk listing)
                    </label>
                </div>

                <div className="form-group">
                    <label>Meetup Preference</label>
                    <input
                        type="text"
                        name="meetupPreference"
                        value={formData.meetupPreference}
                        onChange={handleChange}
                        placeholder="e.g., Library lobby, Cafeteria"
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
                    {loading ? 'Listing Item...' : 'List Item'}
                </button>
            </form>
        </div>
    );
};

export default AddItem;
