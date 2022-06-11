import axios from 'axios';

const POST_GET_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/czZaZBLIsHvyvBPgNWm3/books';
const REMOVE_BOOK = 'Bookstore/redux/books/REMOVE_BOOK';
const ADD_BOOK = 'Bookstore/redux/books/ADD_BOOK';
const DISPLAY_BOOK = 'Bookstore/redux/books/DISPLAY_BOOK';
const SHOW_MESSAGE = 'Bookstore/redux/books/SHOW_MESSAGE';

let defaultState = [];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const newBook = {
        item_id: `item${Date.now()}`,
        title: action.book.book,
        author: action.book.author,
        category: 'Adventure',
      };

      const newBookDisplayed = [
        `item${Date.now()}`,
        [
          {
            title: action.book.book,
            author: action.book.author,
            category: 'Adventure',
          },
        ],
      ];

      axios.post(POST_GET_URL, newBook);

      defaultState = [...state, newBookDisplayed];
      return defaultState;
    }

    case REMOVE_BOOK: {
      axios.delete(`${POST_GET_URL}/${action.bookId}`);
      defaultState = state.filter((book) => book[0] !== action.bookId);
      return defaultState;
    }

    case DISPLAY_BOOK: {
      const booksList = action.newState;
      return booksList;
    }

    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(bookId) {
  return { type: REMOVE_BOOK, bookId };
}

export function displayBook() {
  return (dispatch) => {
    axios.get(POST_GET_URL).then(
      (response) => {
        const newState = Object.entries(response.data);
        dispatch({ type: DISPLAY_BOOK, newState });
      },
    );
  };
}
