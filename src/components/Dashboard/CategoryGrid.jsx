import { useParams, useNavigate } from 'react-router-dom';
import './CategoryGrid.css';

const CategoryGrid = () => {
    const { section } = useParams();
    const navigate = useNavigate();

    const categories = [
        {
            id: 'academic',
            name: 'Academic',
            icon: '📚',
            description: 'Notes, textbooks, lab equipment',
            color: '#6366f1'
        },
        {
            id: 'clothing',
            name: 'Clothing',
            icon: '👕',
            description: 'Formal wear, sports gear',
            color: '#10b981'
        },
        {
            id: 'dorm',
            name: 'Dorm Essentials',
            icon: '🛏️',
            description: 'Furniture, storage, decor',
            color: '#f59e0b'
        },
        {
            id: 'hobbies',
            name: 'Hobbies',
            icon: '🎸',
            description: 'Sports, music, art supplies',
            color: '#ec4899'
        },
        {
            id: 'electronics',
            name: 'Electronics',
            icon: '💻',
            description: 'Laptops, chargers, gadgets',
            color: '#8b5cf6'
        },
        {
            id: 'kitchen',
            name: 'Kitchen',
            icon: '🍳',
            description: 'Utensils, cookware, appliances',
            color: '#f97316'
        }
    ];

    const getSectionTitle = () => {
        const titles = {
            'peer-to-peer': 'Peer-to-Peer',
            'faculty-staff': 'Faculty/Staff',
            'lost-found': 'Lost & Found',
            'free-giveaway': 'Free Giveaways'
        };
        return titles[section] || 'Categories';
    };

    const handleCategoryClick = (categoryId) => {
        navigate(`/items/${section}/${categoryId}`);
    };

    return (
        <div className="category-page">
            <div className="category-header">
                <button className="btn-back" onClick={() => navigate('/dashboard')}>
                    ← Back to Dashboard
                </button>
                <h1>{getSectionTitle()}</h1>
                <p>Select a category to browse items</p>
            </div>

            <div className="categories-grid">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="category-card"
                        onClick={() => handleCategoryClick(category.id)}
                        style={{ '--category-color': category.color }}
                    >
                        <div className="category-icon">{category.icon}</div>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                        <div className="category-arrow">→</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;
