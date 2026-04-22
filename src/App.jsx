import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import CategoryGrid from './components/Dashboard/CategoryGrid';
import ItemList from './components/Items/ItemList';
import AddItem from './components/Items/AddItem';
import WishlistBoard from './components/Features/WishlistBoard';
import GraduatingSoon from './components/Features/GraduatingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
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
