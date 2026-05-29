/**
 * Cache Management Utilities for Odapi
 * Handles localStorage operations for state persistence
 */

const CACHE_KEY = 'odapi_state';
const CACHE_BACKUP_KEY = 'odapi_state_backup';

/**
 * Save state to localStorage
 * @param {Object} state - The state object to save
 * @returns {boolean} - True if successful, false otherwise
 */
export const saveStateToCache = (state) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error('Failed to save state to cache:', error);
    return false;
  }
};

/**
 * Load state from localStorage
 * @returns {Object|null} - The cached state or null if not found
 */
export const loadStateFromCache = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.error('Failed to load state from cache:', error);
    return null;
  }
};

/**
 * Create a backup of current state
 * @param {Object} state - The state object to backup
 * @returns {boolean} - True if successful
 */
export const backupState = (state) => {
  try {
    localStorage.setItem(CACHE_BACKUP_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error('Failed to backup state:', error);
    return false;
  }
};

/**
 * Restore state from backup
 * @returns {Object|null} - The backed up state or null if not found
 */
export const restoreFromBackup = () => {
  try {
    const backup = localStorage.getItem(CACHE_BACKUP_KEY);
    return backup ? JSON.parse(backup) : null;
  } catch (error) {
    console.error('Failed to restore from backup:', error);
    return null;
  }
};

/**
 * Clear all cache data
 * @returns {boolean} - True if successful
 */
export const clearAllCache = () => {
  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_BACKUP_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear cache:', error);
    return false;
  }
};

/**
 * Export state data as JSON file
 * @param {Object} state - The state to export
 * @param {string} filename - Name of the file to save
 */
export const exportStateAsJSON = (state, filename = 'odapi_backup.json') => {
  try {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2)));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    return true;
  } catch (error) {
    console.error('Failed to export state:', error);
    return false;
  }
};

/**
 * Get cache statistics
 * @returns {Object} - Cache info with size and entry count
 */
export const getCacheStats = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return { isEmpty: true, size: 0, entries: {} };
    
    const state = JSON.parse(cached);
    const entries = {
      RoI: state.RoI?.length || 0,
      depart: state.depart?.length || 0,
      iterations: state.iterations?.length || 0,
      ratio: state.ratio?.length || 0,
    };
    
    return {
      isEmpty: false,
      size: new Blob([cached]).size,
      entries,
      lastModified: new Date().toLocaleString(),
    };
  } catch (error) {
    console.error('Failed to get cache stats:', error);
    return null;
  }
};
