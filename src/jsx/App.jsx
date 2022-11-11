
import '../assets/css/App_light_mode.css';
import '../assets/css/Calculator.css';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home   from './pages/Home'
import CalculatorPage  from './pages/CalculatorPage'
import Header from './components/Header'
import {createMemoryHistory} from 'history';


function App() {
  const history = createMemoryHistory();
  const web_version = true;
  const closeNavbar = () => {
    document.getElementById("navbar").style.display = "none";
    if(!web_version) document.getElementById("overlay").style.display = "none";
    document.getElementById("close-navbar-icon").style.display = "none";
    document.getElementById("open-navbar-icon").style.display = "block";
  }

  return (
  <Router location={history.location} navigator={history}>
    <Header closeNavbar = {closeNavbar} web_version={web_version}/>
    <div className ="page">
      <NavBar/>
      {!web_version && <div 
            id="overlay"
            className="w3-overlay" 
            onClick = {closeNavbar} />}
      <div className ="page-content">
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/calculator" element = {<CalculatorPage/>}/>
        </Routes>
      </div>
      
    </div>
  </Router>
  );
}

export default App;
