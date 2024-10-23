// src/redux/store.js

import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'; // Import rootReducer

const store = createStore(rootReducer); // Tạo store với rootReducer

export default store;
