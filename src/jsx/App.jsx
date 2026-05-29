
import '../assets/css/App_light_mode.css';
import '../assets/css/Calculator.css';

import {React, useReducer, createContext, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home            from './pages/Home';
import CalculatorPage  from './pages/CalculatorPage';
import Page            from './pages/Page';

import {createMemoryHistory} from 'history';

const CACHE_KEY = 'odapi_state';

const defaultState = {
  dark_mode: false,
  RoI :[],
  depart :[],
  iterations :[],
  ratio :[],
};

// Load initial state from localStorage
const loadInitialState = () => {
  try {
    const cachedState = localStorage.getItem(CACHE_KEY);
    if (cachedState) {
      return JSON.parse(cachedState);
    }
  } catch (error) {
    console.error('Failed to load state from cache:', error);
  }
  return defaultState;
};

function reducer(state, action) {
  switch (action.type) {
    case 'addCard':
      console.debug('global_state:', state)
      return {...state, [action.payload.key] : [...state[action.payload.key], action.payload.value] };
    
    case 'updateCard':
      const { key, index, cardData } = action.payload;
      const updatedList = [...state[key]];
      updatedList[index] = cardData;
      return {...state, [key]: updatedList};
    
    case 'deleteCard':
      const updatedArray = state[action.payload.key].filter((_, index) => index !== action.payload.index);
      return {...state, [action.payload.key]: updatedArray};
    
    case 'clearCards':
      return {...state, [action.payload.key]: []};
    
    case 'toggleDarkMode':
      return {...state, dark_mode: !state.dark_mode};
    
    case 'loadFromCache':
      return action.payload;
    
    default:
      throw new Error("Action undefined");
  }
}

export const AppContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, loadInitialState());
  const history = createMemoryHistory();
  const web_version = true;

  // Auto-save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(state));
      console.debug('State saved to cache');
    } catch (error) {
      console.error('Failed to save state to cache:', error);
    }
  }, [state]);

  // Handle window resize to close navbar on small screens
  useEffect(() => {
    const handleResize = () => {
      // If resizing to mobile and navbar is open, close it
      if (window.innerWidth <= 768) {
        const navbar = document.getElementById('navbar');
        if (navbar && navbar.style.display === 'block') {
          navbar.style.display = 'none';
          const openIcon = document.getElementById('open-navbar-icon');
          const closeIcon = document.getElementById('close-navbar-icon');
          if (openIcon) openIcon.style.display = 'block';
          if (closeIcon) closeIcon.style.display = 'none';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value = {
    global_state: state,
    addCard: (payload) => {
      dispatch({ type: 'addCard', payload });
    },
    updateCard: (key, index, cardData) => {
      dispatch({ type: 'updateCard', payload: { key, index, cardData } });
    },
    deleteCard: (key, index) => {
      dispatch({ type: 'deleteCard', payload: { key, index } });
    },
    clearCards: (key) => {
      dispatch({ type: 'clearCards', payload: { key } });
    },
    toggleDarkMode: () => {
      dispatch({ type: 'toggleDarkMode' });
    },
    clearAllData: () => {
      dispatch({ type: 'loadFromCache', payload: defaultState });
    },
  };
  const closeNavbar = () => {
    const navbar = document.getElementById("navbar");
    const overlay = document.getElementById("overlay");
    const closeIcon = document.getElementById("close-navbar-icon");
    const openIcon = document.getElementById("open-navbar-icon");
    
    if (navbar) navbar.style.display = "none";
    if (overlay) overlay.style.display = "none";
    if (closeIcon) closeIcon.style.display = "none";
    if (openIcon) openIcon.style.display = "block";
  }

  return (
    <AppContext.Provider value={value}>
      <Router location={history.location} navigator={history}>
        <Header closeNavbar = {closeNavbar} />
        <div className ="page">
          <NavBar web_version={web_version}/>
          <div 
                id="overlay"
                className="w3-overlay" 
                onClick = {closeNavbar} 
                style={{ display: 'none' }} />
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
