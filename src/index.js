import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './modules/Books/Books';
import Categories from './modules/Categories';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
