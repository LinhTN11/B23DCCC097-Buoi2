const initialState = {
  items: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      // Kiểm tra xem sản phẩm đã tồn tại chưa để không thêm trùng
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return state; // Nếu sản phẩm đã tồn tại, không thay đổi state
      }
      return {
        ...state,
        items: [...state.items, action.payload], // Thêm sản phẩm mới
      };

    case 'REMOVE_PRODUCT':
      // Xóa sản phẩm bằng cách lọc ra các sản phẩm không khớp với id của payload
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    default:
      return state; // Nếu action không khớp, trả về state hiện tại
  }
};

export default productReducer;
