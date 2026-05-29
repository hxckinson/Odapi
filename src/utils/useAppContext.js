import { useContext } from 'react';
import { AppContext } from '../jsx/App';

/**
 * Custom hook to use the App context
 * Provides easy access to global state and dispatch methods
 * 
 * @returns {Object} - Context value with state and dispatch methods
 * 
 * @example
 * const { global_state, addCard, deleteCard } = useAppContext();
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error('useAppContext must be used within AppContext.Provider');
  }
  
  return context;
};

export default useAppContext;
