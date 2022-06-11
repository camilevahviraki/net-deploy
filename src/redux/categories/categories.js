const CHECK_STATUS = 'Bookstore/redux/books/CHECK_STATUS';

function categories(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
}

export function check() {
  return { type: CHECK_STATUS };
}

export default categories;
