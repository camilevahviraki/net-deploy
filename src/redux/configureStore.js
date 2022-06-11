import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categories from './categories/categories';
import logger from './logger';

const rootReducer = combineReducers({
  booksReducer,
  categories,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
