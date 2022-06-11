import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import Input from './Input';
import '../../styles/form.css';

function Form() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    book: '',
    author: '',
  });

  const ChangeInput = (e) => {
    const X = e.target.name;
    if (X === 'Author') {
      setState({
        book: state.book,
        author: e.target.value,
      });
    } else if (X === 'Add book') {
      setState({
        author: state.author,
        book: e.target.value,
      });
    }
  };

  return (
    <div className="form">
      <h2 className="AddBook">ADD NEW BOOK</h2>
      <div className="formIn">
        <Input name="Add book" enterBook={ChangeInput} />
        <Input name="Author" enterBook={ChangeInput} />
        <button type="submit" onClick={() => dispatch(addBook(state))}>
          ADD BOOK
        </button>
      </div>
    </div>
  );
}

export default Form;
