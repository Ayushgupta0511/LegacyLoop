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
    const existingItems = localStorage.getItem('legacyloop_items');
    if (!existingItems || JSON.parse(existingItems).length === 0) {
      const demoItems = [
        {
          id: 'demo-1',
          title: 'Vintage Denim Jacket',
          description: 'Great condition, size Large. Perfect for winters on campus!',
          price: 500,
          isFree: false,
          condition: 'good',
          section: 'peer-to-peer',
          category: 'clothing',
          status: 'available',
          images: ['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80'],
          sellerName: 'Rahul K.',
          sellerYear: '3rd Year'
        },
        {
          id: 'demo-2',
          title: 'Electric Kettle 1.5L',
          description: 'Boils water super fast. Used for one semester in the dorm.',
          price: 300,
          isFree: false,
          condition: 'like-new',
          section: 'peer-to-peer',
          category: 'kitchen',
          status: 'available',
          images: ['https://images.unsplash.com/photo-1594247547702-8610ea663b61?w=500&q=80'],
          sellerName: 'Ananya S.',
          sellerYear: '2nd Year'
        },
        {
          id: 'demo-3',
          title: 'Campus Hoodie',
          description: 'Size M. Slightly faded but super comfortable.',
          price: 0,
          isFree: true,
          condition: 'fair',
          section: 'free-giveaway',
          category: 'clothing',
          status: 'available',
          images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80'],
          sellerName: 'Vikram P.',
          sellerYear: '4th Year'
        },
        {
          id: 'demo-4',
          title: 'Set of 4 Coffee Mugs',
          description: 'Ceramic mugs, no chips or cracks. Giving away as I am graduating.',
          price: 0,
          isFree: true,
          condition: 'good',
          section: 'free-giveaway',
          category: 'kitchen',
          status: 'available',
          images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80'],
          sellerName: 'Sneha M.',
          sellerYear: 'Graduate'
        },
        {
          id: 'demo-5',
          title: 'Wireless Mouse',
          description: 'Logitech mouse. Works perfectly, comes with the USB receiver.',
          price: 400,
          isFree: false,
          condition: 'like-new',
          section: 'faculty-staff',
          category: 'electronics',
          status: 'available',
          images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80'],
          sellerName: 'Prof. Sharma',
          sellerYear: 'Faculty'
        }
      ];
      localStorage.setItem('legacyloop_items', JSON.stringify(demoItems));
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
