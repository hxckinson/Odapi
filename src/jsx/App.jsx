import logo from '../assets/pictures/logo.svg';
import '../assets/css/App.css';
import { push as Menu } from 'react-burger-menu'



function App() {
  
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  );
}

export default App;
