import React from 'react';
import '../../styles/Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

export default function Book(props) {
  const dispatch = useDispatch();
  return (
    <div className="Book">
      <div className="leftH">
        <span className="category">{props.book[1][0].category}</span>
        <h2 className="Title">{props.book[1][0].title}</h2>
        <span className="author">{props.book[1][0].author}</span>
        <ul className="ul-Buttons">
          <li>
            <button type="button">Comments</button>
            <span className="line"></span>
          </li>
          <li>
            <button
              type="button"
              onClick={() => dispatch(removeBook(props.book[0]))}
            >
              Remove
            </button>
            <span className="line"></span>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="Middle">
        <div className="Circle">
          <div className="mask half">
            <div className="fill">
              <div className="inside-circle" />
            </div>
          </div>
        </div>
        <div className="progress">
          <p className="percentage">28%</p>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="right">
        <h3 className="Current-Chapter">CURRENT CHAPTER</h3>
        <span className="chapter">Introduction</span>
        <a href="https://app.netlify.com/start/deploy?https://github.com/camilevahviraki/Book-store">Deploy on Netlify</a>
        <button type="button" className="check_button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}
