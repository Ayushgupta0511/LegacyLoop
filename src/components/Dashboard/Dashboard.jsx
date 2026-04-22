import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'peer-to-peer',
            title: 'Peer-to-Peer',
            icon: '🤝',
            description: 'Exchange items with fellow students',
            color: '#6366f1'
        },
        {
            id: 'faculty-staff',
            title: 'Faculty/Staff',
            icon: '👨‍🏫',
            description: 'Items from faculty and staff members',
            color: '#10b981'
        },
        {
            id: 'lost-found',
            title: 'Lost & Found',
            icon: '🔍',
            description: 'Report lost items or claim found ones',
            color: '#f59e0b'
        },
        {
            id: 'free-giveaway',
            title: 'Free Giveaways',
            icon: '🎁',
            description: 'Free items from generous donors',
            color: '#ec4899'
        }
    ];

    const handleSectionClick = (sectionId) => {
        navigate(`/categories/${sectionId}`);
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Welcome to LegacyLoop</h1>
                <p>Choose a section to start browsing or listing items</p>
            </div>

            <div className="sections-grid">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className="section-card"
                        onClick={() => handleSectionClick(section.id)}
                        style={{ '--section-color': section.color }}
                    >
                        <div className="section-icon">{section.icon}</div>
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                        <div className="section-arrow">→</div>
                    </div>
                ))}
            </div>

            <div className="quick-actions">
                <button
                    className="btn btn-primary btn-large"
                    onClick={() => navigate('/add-item')}
                >
                    + List an Item
                </button>
                <button
                    className="btn btn-secondary btn-large"
                    onClick={() => navigate('/wishlist')}
                >
                    📋 View Wishlist Board
                </button>
                <button
                    className="btn btn-accent btn-large"
                    onClick={() => navigate('/graduating-soon')}
                >
                    🎓 Graduating Soon
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
