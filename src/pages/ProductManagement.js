import React from 'react';
import { useSelector } from 'react-redux';

function ProductManagement() {
  const products = useSelector(state => state.products.items);

  return (
    <div className="product-management">
      <h1>Danh Sách Hàng Hóa</h1>
      <input type="text" placeholder="Tìm kiếm hàng hóa..." />
      {products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name} - {product.price}</li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy hàng hóa nào!</p>
      )}
      <button>Thêm Hàng Hóa</button>
    </div>
  );
}

export default ProductManagement;
