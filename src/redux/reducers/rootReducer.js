// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import productReducer from './productReducer'; // Giả sử bạn có productReducer

const rootReducer = combineReducers({
  products: productReducer, // Bạn có thể thêm nhiều reducer khác tại đây
});

export default rootReducer;
