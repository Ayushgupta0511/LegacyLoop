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
                // Category-specific fallback demo data
                const fallbacks = {
                    academic: [
                        { id: 'fb-a1', title: 'DSA Textbook – Cormen', description: 'Introduction to Algorithms, 3rd Ed. Highlighted but intact.', price: 250, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop'], sellerName: 'Priya S.', sellerYear: '3rd Year' },
                        { id: 'fb-a2', title: 'Engineering Drawing Kit', description: 'Complete drafter set with compass, protractor, and mini-drafter.', price: 400, isFree: false, condition: 'like-new', images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'], sellerName: 'Arjun M.', sellerYear: '2nd Year' },
                        { id: 'fb-a3', title: 'Organic Chemistry Notes', description: 'Handwritten notes covering full semester. Very neat.', price: 0, isFree: true, condition: 'good', images: ['https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&h=300&fit=crop'], sellerName: 'Kavya R.', sellerYear: 'Graduate' },
                        { id: 'fb-a4', title: 'HC Verma Physics Bundle', description: 'Vol 1 & 2 + Irodov. All in readable condition.', price: 350, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop'], sellerName: 'Dr. Kapoor', sellerYear: 'Faculty' }
                    ],
                    clothing: [
                        { id: 'fb-c1', title: 'Vintage Denim Jacket', description: 'Great condition, size Large. Perfect for campus winters!', price: 500, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop'], sellerName: 'Rahul K.', sellerYear: '3rd Year' },
                        { id: 'fb-c2', title: 'Running Shoes – Nike', description: 'Size UK 9. Used for one semester, sole in great shape.', price: 1200, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'], sellerName: 'Kiran T.', sellerYear: '3rd Year' },
                        { id: 'fb-c3', title: 'Formal White Shirt', description: 'Peter England, Size 40. Worn twice for presentations.', price: 350, isFree: false, condition: 'like-new', images: ['https://images.unsplash.com/photo-1598032895455-1e67f07e7808?w=400&h=300&fit=crop'], sellerName: 'Deepak R.', sellerYear: '2nd Year' },
                        { id: 'fb-c4', title: 'Campus Hoodie – Size M', description: 'College Athletics print. Slightly faded but comfy.', price: 0, isFree: true, condition: 'fair', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop'], sellerName: 'Vikram P.', sellerYear: '4th Year' }
                    ],
                    electronics: [
                        { id: 'fb-e1', title: 'Wireless Mouse – Logitech', description: 'Works perfectly, comes with USB receiver.', price: 400, isFree: false, condition: 'like-new', images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop'], sellerName: 'Prof. Sharma', sellerYear: 'Faculty' },
                        { id: 'fb-e2', title: 'USB-C Hub 7-in-1', description: 'HDMI, USB 3.0 x3, SD card. Essential for Mac users.', price: 900, isFree: false, condition: 'new', images: ['/images/products/usb-hub.png'], sellerName: 'Aditya N.', sellerYear: '2nd Year' },
                        { id: 'fb-e3', title: 'Wireless Earbuds – boAt', description: 'boAt Airdopes 141, 42hr battery. Used 3 months.', price: 600, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=300&fit=crop'], sellerName: 'Ishaan G.', sellerYear: '3rd Year' },
                        { id: 'fb-e4', title: 'Scientific Calculator – Casio', description: 'Casio fx-991EX. All functions working. Exam approved.', price: 500, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=400&h=300&fit=crop'], sellerName: 'Prof. Iyer', sellerYear: 'Faculty' }
                    ],
                    kitchen: [
                        { id: 'fb-k1', title: 'Electric Kettle 1.5L', description: 'Boils water super fast. Used for one semester.', price: 300, isFree: false, condition: 'like-new', images: ['/images/products/electric-kettle.png'], sellerName: 'Ananya S.', sellerYear: '2nd Year' },
                        { id: 'fb-k2', title: 'Set of 4 Coffee Mugs', description: 'Ceramic mugs, no chips. Giving away – graduating!', price: 0, isFree: true, condition: 'good', images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop'], sellerName: 'Sneha M.', sellerYear: 'Graduate' },
                        { id: 'fb-k3', title: 'Mini Induction Cooktop', description: 'Portable 1200W plate. Perfect for hostel cooking.', price: 800, isFree: false, condition: 'good', images: ['/images/products/induction-cooktop.png'], sellerName: 'Rohan V.', sellerYear: '3rd Year' },
                        { id: 'fb-k4', title: 'Water Filter Bottle', description: 'Built-in filter, 750ml. Great for campus walks.', price: 200, isFree: false, condition: 'like-new', images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop'], sellerName: 'Tanvi D.', sellerYear: '1st Year' }
                    ],
                    dorm: [
                        { id: 'fb-d1', title: 'Desk Lamp – LED Adjustable', description: 'USB powered, 3 brightness levels. Great for study.', price: 350, isFree: false, condition: 'like-new', images: ['/images/products/desk-lamp.png'], sellerName: 'Siddharth L.', sellerYear: '2nd Year' },
                        { id: 'fb-d2', title: 'Mattress Topper – Single', description: 'Memory foam, 2 inches. Makes hostel beds bearable.', price: 600, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop'], sellerName: 'Divya K.', sellerYear: '3rd Year' },
                        { id: 'fb-d3', title: 'Small Table Fan – USB', description: 'Clip-mount portable fan. Life saver in summer.', price: 250, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1614533735899-91fd747a0577?w=400&h=300&fit=crop'], sellerName: 'Neha T.', sellerYear: '1st Year' },
                        { id: 'fb-d4', title: 'Shoe Rack – 4 Tier', description: 'Foldable plastic. Fits perfectly in hostel rooms.', price: 0, isFree: true, condition: 'fair', images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop'], sellerName: 'Akash B.', sellerYear: '4th Year' }
                    ],
                    hobbies: [
                        { id: 'fb-h1', title: 'Acoustic Guitar – Yamaha', description: 'Well maintained, comes with bag and picks.', price: 3500, isFree: false, condition: 'good', images: ['/images/products/guitar.png'], sellerName: 'Harsh V.', sellerYear: '4th Year' },
                        { id: 'fb-h2', title: 'Badminton Racket Pair', description: 'Yonex rackets with 6 shuttlecocks.', price: 800, isFree: false, condition: 'like-new', images: ['https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop'], sellerName: 'Pooja N.', sellerYear: '2nd Year' },
                        { id: 'fb-h3', title: 'Chess Board – Wooden', description: 'Magnetic set with all pieces. Tournament size.', price: 450, isFree: false, condition: 'good', images: ['https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop'], sellerName: 'Varun D.', sellerYear: '3rd Year' },
                        { id: 'fb-h4', title: 'Sketch Pencil Set – 24 pcs', description: 'Professional graphite pencils. Barely used.', price: 0, isFree: true, condition: 'like-new', images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'], sellerName: 'Ritika S.', sellerYear: 'Graduate' }
                    ]
                };
                setItems(fallbacks[category] || []);
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
