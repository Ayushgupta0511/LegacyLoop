import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';
import './ItemList.css';

const ItemList = () => {
    const { section, category } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCondition, setFilterCondition] = useState('all');

    useEffect(() => {
        fetchItems();
    }, [section, category]);

    const fetchItems = async () => {
        try {
            setLoading(true);

            // Load items from localStorage
            const storedItems = JSON.parse(localStorage.getItem('legacyloop_items') || '[]');
            const filteredByRoute = storedItems.filter(
                item => item.section === section && item.category === category && item.status === 'available'
            );

            if (filteredByRoute.length > 0) {
                setItems(filteredByRoute);
            } else {
                // Fallback demo data
                setItems([
                    {
                        id: '1',
                        title: 'Data Structures Textbook',
                        description: 'Gently used, all chapters intact',
                        price: 25,
                        isFree: false,
                        condition: 'good',
                        images: ['https://via.placeholder.com/300x200?text=Textbook'],
                        sellerName: 'John Doe',
                        sellerYear: '4th Year'
                    },
                    {
                        id: '2',
                        title: 'Lab Coat - Size M',
                        description: 'Clean, barely used',
                        price: 0,
                        isFree: true,
                        condition: 'like-new',
                        images: ['https://via.placeholder.com/300x200?text=Lab+Coat'],
                        sellerName: 'Jane Smith',
                        sellerYear: 'Graduate'
                    }
                ]);
            }
        } catch (error) {
            console.error('Error fetching items:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCondition = filterCondition === 'all' || item.condition === filterCondition;
        return matchesSearch && matchesCondition;
    });

    const getCategoryName = () => {
        const names = {
            academic: 'Academic',
            clothing: 'Clothing',
            dorm: 'Dorm Essentials',
            hobbies: 'Hobbies',
            electronics: 'Electronics',
            kitchen: 'Kitchen'
        };
        return names[category] || category;
    };

    return (
        <div className="item-list-page">
            <div className="item-list-header">
                <button className="btn-back" onClick={() => navigate(`/categories/${section}`)}>
                    ← Back to Categories
                </button>
                <h1>{getCategoryName()}</h1>
            </div>

            <div className="filters-bar">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select
                    value={filterCondition}
                    onChange={(e) => setFilterCondition(e.target.value)}
                    className="filter-select"
                >
                    <option value="all">All Conditions</option>
                    <option value="new">New</option>
                    <option value="like-new">Like New</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                </select>
            </div>

            {loading ? (
                <div className="loading">Loading items...</div>
            ) : filteredItems.length === 0 ? (
                <div className="no-items">
                    <p>No items found in this category yet.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/add-item')}>
                        Be the first to list an item!
                    </button>
                </div>
            ) : (
                <div className="items-grid">
                    {filteredItems.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemList;
