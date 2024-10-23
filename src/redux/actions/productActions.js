// actions/productActions.js
export const addProduct = (product) => {
  // Kiểm tra nếu product không hợp lệ, ngăn chặn action nếu cần
  if (!product || !product.id || !product.name || product.price === undefined) {
    console.error('Dữ liệu sản phẩm không hợp lệ');
    return;
  }

  return {
    type: 'ADD_PRODUCT',
    payload: product, // Gửi dữ liệu sản phẩm qua payload
  };
};

  