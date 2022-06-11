import { useSelector, connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Book from './Book';
import Form from '../form/Form';
import Header from '../Header';
import { displayBook } from '../../redux/books/books';

function Books({ getUsers }) {
  useEffect(() => {
    getUsers();
  }, []);
  const Bookstore = useSelector((state) => state.booksReducer);
  const [links] = useState([
    { status: false, link: '../categories' },
    { status: true, link: '../' },
  ]);

  return (
    <div className="allBooks">
      <Header obj={links} />
      {
        Bookstore.map((book) => (
          <Book key={book.id} book={book} />
        ))
}
      <Form />
    </div>
  );
}

const mapUseReducerProps = (state) => ({ booksReducer: state.booksReducer });

const mapDispatchToProps = (dispatch) => ({ getUsers: () => dispatch(displayBook()) });

export default connect(
  mapUseReducerProps,
  mapDispatchToProps,
)(Books);
