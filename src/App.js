import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GuidePage from './pages/GuidePage';
import ProductManagement from './pages/ProductManagement';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            {/* Định nghĩa các route */}
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/product-management" element={<ProductManagement />} />
            <Route path="/AddProduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

