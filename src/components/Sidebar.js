import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/guide">Hướng dẫn</Link></li>
        <li><Link to="/product-management">Quản lý hàng hóa</Link></li>
        <Link to="/AddProduct">Hàng Hóa</Link> 
      </ul>
    </div>
  );
}

export default Sidebar;
