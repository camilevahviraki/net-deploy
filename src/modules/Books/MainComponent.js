import { useSelector } from 'react-redux';

function MainComponent() {
  const booksList = useSelector((state) => state.booksList);
  console.log(booksList);
  return booksList;
}

export default MainComponent;
