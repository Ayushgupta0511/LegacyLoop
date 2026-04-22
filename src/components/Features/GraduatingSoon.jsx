import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../Items/ItemCard';
import './GraduatingSoon.css';

const GraduatingSoon = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGraduatingItems();
    }, []);

    const fetchGraduatingItems = () => {
        try {
            // Load from localStorage
            const storedItems = JSON.parse(localStorage.getItem('legacyloop_items') || '[]');
            const graduatingItems = storedItems.filter(
                item => item.isGraduatingSoon && item.status === 'available'
            );

            if (graduatingItems.length > 0) {
                setItems(graduatingItems);
            } else {
                // Demo data
                setItems([
                    {
                        id: '1',
                        title: 'Complete Engineering Notes Collection',
                        description: '4 years of handwritten notes, all subjects',
                        price: 50,
                        isFree: false,
                        condition: 'good',
                        isGraduatingSoon: true,
                        images: ['https://via.placeholder.com/300x200?text=Notes'],
                        sellerName: 'Shruti Gupta',
                        sellerYear: '4th Year'
                    },
                    {
                        id: '2',
                        title: 'Dorm Furniture Bundle',
                        description: 'Desk lamp, storage boxes, mini shelf - all free!',
                        price: 0,
                        isFree: true,
                        condition: 'good',
                        isGraduatingSoon: true,
                        images: ['https://via.placeholder.com/300x200?text=Furniture'],
                        sellerName: 'Aman Patel',
                        sellerYear: 'Graduate'
                    },
                    {
                        id: '3',
                        title: 'Lab Equipment Set',
                        description: 'Goggles, coat, gloves - barely used',
                        price: 15,
                        isFree: false,
                        condition: 'like-new',
                        isGraduatingSoon: true,
                        images: ['https://via.placeholder.com/300x200?text=Lab+Equipment'],
                        sellerName: 'Kavya Reddy',
                        sellerYear: '4th Year'
                    }
                ]);
            }
        } catch (error) {
            console.error('Error fetching graduating items:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="graduating-page">
            <div className="graduating-header">
                <button className="btn-back" onClick={() => navigate('/dashboard')}>
                    ← Back to Dashboard
                </button>
                <h1>🎓 Graduating Soon</h1>
                <p>Grab great deals from seniors leaving campus!</p>
            </div>

            {loading ? (
                <div className="loading">Loading items...</div>
            ) : items.length === 0 ? (
                <div className="no-items">
                    <p>No graduating senior items available right now.</p>
                </div>
            ) : (
                <div className="items-grid">
                    {items.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default GraduatingSoon;
