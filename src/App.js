import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MenuComponent from './page/MenuPage/MenuPage';
import ModalHOC from './HOC/ModalHOC/ModalHOC';

function App() {
  return (
    <BrowserRouter>
      <ModalHOC />
      <MenuComponent />
    </BrowserRouter>
  );
}

export default App;
