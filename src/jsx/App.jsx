
import '../assets/css/App_light_mode.css';
import '../assets/css/Calculator.css';

import {React,useReducer, createContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home            from './pages/Home';
import CalculatorPage  from './pages/CalculatorPage';
import Page            from './pages/Page';

import {createMemoryHistory} from 'history';

const initialState = {
  dark_mode: false,
  RoI :[],
  depart :[],
  iterations :[],
  ratio :[],
  };

function reducer(state, action) {
  switch (action.type) {
    case 'addCard':
      console.debug('global_sate:',state)
      return {...state, [action.payload.key] : [...state[action.payload.key],action.payload.value] };
    default:
      throw new Error("Action undefined");
  }
}

export const AppContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = createMemoryHistory();
  const web_version = true;

  const value = {
    global_state: state,
    addCard: (payload) => {
      dispatch({ type: 'addCard', payload:payload });
    },
    
  };
  const closeNavbar = () => {
    document.getElementById("navbar").style.display = "none";
    if(!web_version) document.getElementById("overlay").style.display = "none";
    document.getElementById("close-navbar-icon").style.display = "none";
    document.getElementById("open-navbar-icon").style.display = "block";
  }

  return (
    <AppContext.Provider value={value}>
      <Router location={history.location} navigator={history}>
        <Header closeNavbar = {closeNavbar} />
        <div className ="page">
          <NavBar web_version={web_version}/>
          {!web_version && <div 
                id="overlay"
                className="w3-overlay" 
                onClick = {closeNavbar} />}
          <div className ="page-content">
            <Routes>
              <Route exact path="/"           element = {<Home/>}/>
              <Route exact path="/calculator" element = {<CalculatorPage/>}/>
              <Route exact path="/RoI"        element = {<Page pageType = 'RoI' pageTitle = 'Retours sur investissements'/>}/>
              <Route exact path="/depart"     element = {<Page pageType = 'depart' pageTitle = 'Somme(s) de départ'/>}/>
              <Route exact path="/iterations" element = {<Page pageType = 'iterations' pageTitle = 'Iterations'/>}/>
              <Route exact path="/ratio"      element = {<Page pageType = 'ratio' pageTitle = 'Taux par itération'/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
