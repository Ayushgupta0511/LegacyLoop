import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import LandingPage from './components/Landing/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import CategoryGrid from './components/Dashboard/CategoryGrid';
import ItemList from './components/Items/ItemList';
import AddItem from './components/Items/AddItem';
import WishlistBoard from './components/Features/WishlistBoard';
import GraduatingSoon from './components/Features/GraduatingSoon';
import './App.css';

function App() {
  useEffect(() => {
    const DEMO_VERSION = 'v4';
    const currentVersion = localStorage.getItem('legacyloop_demo_version');
    if (currentVersion !== DEMO_VERSION) {
      const demoItems = [
        // ── CLOTHING ──
        {
          id: 'demo-1',
          title: 'Vintage Denim Jacket',
          description: 'Great condition, size Large. Perfect for winters on campus!',
          price: 500, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'clothing', status: 'available',
          images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop'],
          sellerName: 'Rahul K.', sellerYear: '3rd Year'
        },
        {
          id: 'demo-3',
          title: 'Campus Hoodie – Size M',
          description: 'Slightly faded but super comfortable. College Athletics print.',
          price: 0, isFree: true, condition: 'fair',
          section: 'free-giveaway', category: 'clothing', status: 'available',
          images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop'],
          sellerName: 'Vikram P.', sellerYear: '4th Year'
        },
        {
          id: 'demo-c1',
          title: 'Formal White Shirt',
          description: 'Peter England, Size 40. Worn twice for presentations.',
          price: 350, isFree: false, condition: 'like-new',
          section: 'peer-to-peer', category: 'clothing', status: 'available',
          images: ['https://images.unsplash.com/photo-1598032895455-1e67f07e7808?w=500&q=80'],
          sellerName: 'Deepak R.', sellerYear: '2nd Year'
        },
        {
          id: 'demo-c2',
          title: 'Running Shoes – Nike',
          description: 'Size UK 9. Used for one semester, sole in great shape.',
          price: 1200, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'clothing', status: 'available',
          images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80'],
          sellerName: 'Kiran T.', sellerYear: '3rd Year'
        },
        {
          id: 'demo-c3',
          title: 'Cotton Kurta – Ethnic Wear',
          description: 'Blue printed kurta, Size L. Worn once for college fest.',
          price: 0, isFree: true, condition: 'like-new',
          section: 'free-giveaway', category: 'clothing', status: 'available',
          images: ['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop'],
          sellerName: 'Meera J.', sellerYear: 'Graduate'
        },

        // ── KITCHEN ──
        {
          id: 'demo-2',
          title: 'Electric Kettle 1.5L',
          description: 'Boils water super fast. Used for one semester in the dorm.',
          price: 300, isFree: false, condition: 'like-new',
          section: 'peer-to-peer', category: 'kitchen', status: 'available',
          images: ['/images/products/electric-kettle.png'],
          sellerName: 'Ananya S.', sellerYear: '2nd Year'
        },
        {
          id: 'demo-4',
          title: 'Set of 4 Coffee Mugs',
          description: 'Ceramic mugs, no chips or cracks. Giving away as I am graduating.',
          price: 0, isFree: true, condition: 'good',
          section: 'free-giveaway', category: 'kitchen', status: 'available',
          images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop'],
          sellerName: 'Sneha M.', sellerYear: 'Graduate'
        },
        {
          id: 'demo-k1',
          title: 'Mini Induction Cooktop',
          description: 'Portable 1200W induction plate. Perfect for hostel cooking.',
          price: 800, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'kitchen', status: 'available',
          images: ['/images/products/induction-cooktop.png'],
          sellerName: 'Rohan V.', sellerYear: '3rd Year'
        },
        {
          id: 'demo-k2',
          title: 'Water Filter Bottle',
          description: 'Built-in filter, 750ml capacity. Great for campus.',
          price: 200, isFree: false, condition: 'like-new',
          section: 'peer-to-peer', category: 'kitchen', status: 'available',
          images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80'],
          sellerName: 'Tanvi D.', sellerYear: '1st Year'
        },

        // ── ELECTRONICS ──
        {
          id: 'demo-5',
          title: 'Wireless Mouse – Logitech',
          description: 'Works perfectly, comes with USB receiver. Great battery life.',
          price: 400, isFree: false, condition: 'like-new',
          section: 'faculty-staff', category: 'electronics', status: 'available',
          images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop'],
          sellerName: 'Prof. Sharma', sellerYear: 'Faculty'
        },
        {
          id: 'demo-e1',
          title: 'USB-C Hub 7-in-1',
          description: 'HDMI, USB 3.0 x3, SD card, ethernet. Essential for Mac users.',
          price: 900, isFree: false, condition: 'new',
          section: 'peer-to-peer', category: 'electronics', status: 'available',
          images: ['/images/products/usb-hub.png'],
          sellerName: 'Aditya N.', sellerYear: '2nd Year'
        },
        {
          id: 'demo-e2',
          title: 'Wireless Earbuds – boAt',
          description: 'boAt Airdopes 141, 42hr battery. Used for 3 months.',
          price: 600, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'electronics', status: 'available',
          images: ['https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=500&q=80'],
          sellerName: 'Ishaan G.', sellerYear: '3rd Year'
        },
        {
          id: 'demo-e3',
          title: 'Old Laptop Charger – Dell 65W',
          description: 'Compatible with Dell Inspiron/Latitude. Working condition.',
          price: 0, isFree: true, condition: 'fair',
          section: 'free-giveaway', category: 'electronics', status: 'available',
          images: ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80'],
          sellerName: 'Nandini P.', sellerYear: '4th Year'
        },
        {
          id: 'demo-e4',
          title: 'Scientific Calculator – Casio',
          description: 'Casio fx-991EX. All functions working. Exam approved.',
          price: 500, isFree: false, condition: 'good',
          section: 'faculty-staff', category: 'electronics', status: 'available',
          images: ['https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&q=80'],
          sellerName: 'Prof. Iyer', sellerYear: 'Faculty'
        },

        // ── ACADEMIC ──
        {
          id: 'demo-a1',
          title: 'DSA Textbook – Cormen',
          description: 'Introduction to Algorithms, 3rd Ed. Highlighted but intact.',
          price: 250, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'academic', status: 'available',
          images: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop'],
          sellerName: 'Priya S.', sellerYear: '3rd Year'
        },
        {
          id: 'demo-a2',
          title: 'Engineering Drawing Kit',
          description: 'Complete drafter set with compass, protractor, and mini-drafter.',
          price: 400, isFree: false, condition: 'like-new',
          section: 'peer-to-peer', category: 'academic', status: 'available',
          images: ['https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80'],
          sellerName: 'Arjun M.', sellerYear: '2nd Year'
        },
        {
          id: 'demo-a3',
          title: 'Organic Chemistry Notes',
          description: 'Handwritten notes covering full semester. Very neat and organized.',
          price: 0, isFree: true, condition: 'good',
          section: 'free-giveaway', category: 'academic', status: 'available',
          images: ['https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=500&q=80'],
          sellerName: 'Kavya R.', sellerYear: 'Graduate'
        },
        {
          id: 'demo-a4',
          title: 'Reference Books Bundle – Physics',
          description: 'HC Verma Vol 1 & 2 + Irodov. All in good condition.',
          price: 350, isFree: false, condition: 'good',
          section: 'faculty-staff', category: 'academic', status: 'available',
          images: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop'],
          sellerName: 'Dr. Kapoor', sellerYear: 'Faculty'
        },

        // ── DORM ESSENTIALS ──
        {
          id: 'demo-d1',
          title: 'Desk Lamp – LED Adjustable',
          description: 'USB powered, 3 brightness levels. Perfect for late-night study.',
          price: 350, isFree: false, condition: 'like-new',
          section: 'peer-to-peer', category: 'dorm', status: 'available',
          images: ['/images/products/desk-lamp.png'],
          sellerName: 'Siddharth L.', sellerYear: '2nd Year'
        },
        {
          id: 'demo-d2',
          title: 'Mattress Topper – Single Bed',
          description: 'Memory foam, 2 inches thick. Makes hostel beds bearable.',
          price: 600, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'dorm', status: 'available',
          images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80'],
          sellerName: 'Divya K.', sellerYear: '3rd Year'
        },
        {
          id: 'demo-d3',
          title: 'Shoe Rack – 4 Tier',
          description: 'Foldable plastic shoe rack. Fits perfectly in hostel rooms.',
          price: 0, isFree: true, condition: 'fair',
          section: 'free-giveaway', category: 'dorm', status: 'available',
          images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80'],
          sellerName: 'Akash B.', sellerYear: '4th Year'
        },
        {
          id: 'demo-d4',
          title: 'Small Table Fan',
          description: 'Portable USB fan with clip mount. Life saver in summer.',
          price: 250, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'dorm', status: 'available',
          images: ['https://images.unsplash.com/photo-1614533735899-91fd747a0577?w=500&q=80'],
          sellerName: 'Neha T.', sellerYear: '1st Year'
        },

        // ── HOBBIES ──
        {
          id: 'demo-h1',
          title: 'Acoustic Guitar – Yamaha F310',
          description: 'Well maintained, comes with bag and picks. Great for beginners.',
          price: 3500, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'hobbies', status: 'available',
          images: ['/images/products/guitar.png'],
          sellerName: 'Harsh V.', sellerYear: '4th Year'
        },
        {
          id: 'demo-h2',
          title: 'Badminton Racket Pair',
          description: 'Yonex rackets with 6 shuttlecocks. Ready for the court.',
          price: 800, isFree: false, condition: 'like-new',
          section: 'peer-to-peer', category: 'hobbies', status: 'available',
          images: ['https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&q=80'],
          sellerName: 'Pooja N.', sellerYear: '2nd Year'
        },
        {
          id: 'demo-h3',
          title: 'Sketch Pencil Set – 24 pcs',
          description: 'Professional grade graphite pencils. Barely used.',
          price: 0, isFree: true, condition: 'like-new',
          section: 'free-giveaway', category: 'hobbies', status: 'available',
          images: ['https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80'],
          sellerName: 'Ritika S.', sellerYear: 'Graduate'
        },
        {
          id: 'demo-h4',
          title: 'Chess Board – Wooden',
          description: 'Magnetic wooden chess set with all pieces. Tournament size.',
          price: 450, isFree: false, condition: 'good',
          section: 'peer-to-peer', category: 'hobbies', status: 'available',
          images: ['https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=500&q=80'],
          sellerName: 'Varun D.', sellerYear: '3rd Year'
        }
      ];
      localStorage.setItem('legacyloop_items', JSON.stringify(demoItems));
      localStorage.setItem('legacyloop_demo_version', DEMO_VERSION);
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories/:section" element={<CategoryGrid />} />
            <Route path="/items/:section/:category" element={<ItemList />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/wishlist" element={<WishlistBoard />} />
            <Route path="/graduating-soon" element={<GraduatingSoon />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
