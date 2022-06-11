import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { check } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [links] = useState([
    { status: true, link: '../categories' },
    { status: false, link: '../' },
  ]);

  return (
    <div className="categoriesZ">
      <Header obj={links} />
      <h2> Categories</h2>
      <button type="button" onClick={() => dispatch(check())}>
        check status
      </button>
      <h4>{categories}</h4>
    </div>
  );
}
