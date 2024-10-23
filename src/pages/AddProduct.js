import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../redux/actions/productActions';

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Hàm xử lý khi người dùng nhập dữ liệu vào form
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Hàm xử lý khi người dùng submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn trang reload lại

    if (product.name && product.price) {
      // Tạo một id ngẫu nhiên cho sản phẩm
      const newProduct = {
        ...product,
        id: Date.now(), // Dùng timestamp để tạo id duy nhất cho sản phẩm
      };

      // Dispatch action addProduct để thêm sản phẩm vào store
      dispatch(addProduct(newProduct));

      // Sau khi thêm sản phẩm thành công, điều hướng về trang chủ (hoặc trang danh sách sản phẩm)
      navigate('/');
    } else {
      alert('Vui lòng nhập đầy đủ thông tin sản phẩm');
    }
  };

  return (
    <div className="AddProduct" >
      <h1>Thêm Sản Phẩm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm"
            required
          />
        </div>
        <div>
          <label>Giá sản phẩm:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Nhập giá sản phẩm"
            required
          />
        </div>
        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
};

export default AddProduct;
