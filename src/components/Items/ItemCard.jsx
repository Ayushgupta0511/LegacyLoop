import { useNavigate } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="item-card" onClick={() => navigate(`/item/${item.id}`)}>
            <div className="item-image">
                <img src={item.images?.[0] || 'https://via.placeholder.com/300x200'} alt={item.title} />
                {item.isFree && <span className="free-badge">FREE</span>}
                {item.isGraduatingSoon && <span className="graduating-badge">🎓 Graduating Soon</span>}
            </div>

            <div className="item-content">
                <h3>{item.title}</h3>
                <p className="item-description">{item.description}</p>

                <div className="item-meta">
                    <span className="condition-badge">{item.condition}</span>
                    <span className="seller-info">
                        {item.sellerName} • {item.sellerYear}
                    </span>
                </div>

                <div className="item-footer">
                    <span className="item-price">
                        {item.isFree ? 'FREE' : `$${item.price}`}
                    </span>
                    <button className="btn-view">View Details →</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
