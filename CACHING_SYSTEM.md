# Odapi Caching System Documentation

## Overview

The Odapi application now includes a comprehensive caching system that automatically persists and loads card data using the browser's localStorage. This ensures that user data is preserved across browser sessions.

## Features

### 1. **Automatic State Persistence**
- State is automatically saved to localStorage whenever it changes
- Data persists across browser sessions
- Uses JSON serialization for complex objects

### 2. **Multiple Reducer Actions**
The enhanced reducer supports the following actions:

#### `addCard`
Adds a new card to a specific category
```javascript
addCard({ key: 'RoI', value: { name: 'Investment 1', ... } })
```

#### `deleteCard`
Removes a card at a specific index
```javascript
deleteCard('RoI', 0) // Deletes first card from RoI
```

#### `clearCards`
Clears all cards from a specific category
```javascript
clearCards('RoI') // Clears all RoI cards
```

#### `toggleDarkMode`
Toggles dark mode on/off
```javascript
toggleDarkMode()
```

#### `clearAllData`
Resets all data to default state
```javascript
clearAllData()
```

## Usage

### Using the Custom Hook

Import and use the `useAppContext` hook for easier access to context:

```javascript
import { useAppContext } from '../utils/useAppContext';

function MyComponent() {
  const { global_state, addCard, deleteCard, clearCards } = useAppContext();
  
  return (
    <div>
      {/* Use global_state and dispatch methods */}
    </div>
  );
}
```

### Using Cache Manager Utilities

Import cache utilities for manual cache operations:

```javascript
import { 
  saveStateToCache,
  loadStateFromCache,
  backupState,
  restoreFromBackup,
  clearAllCache,
  exportStateAsJSON,
  getCacheStats
} from '../utils/cacheManager';

// Get cache statistics
const stats = getCacheStats();
console.log(stats);
// Output: { isEmpty: false, size: 1024, entries: { RoI: 5, depart: 3, ... } }

// Export state to JSON file
exportStateAsJSON(myState, 'my_backup.json');

// Create a backup before major operation
backupState(currentState);

// Restore from backup if needed
const restored = restoreFromBackup();
```

## State Structure

The global state is organized as follows:

```javascript
{
  dark_mode: boolean,
  RoI: Array,           // Return on Investment calculations
  depart: Array,        // Starting amounts
  iterations: Array,    // Iteration counts
  ratio: Array          // Growth rates per iteration
}
```

## Storage Details

- **Storage Method**: Browser's localStorage API
- **Cache Key**: `'odapi_state'`
- **Backup Key**: `'odapi_state_backup'`
- **Format**: JSON string
- **Persistence**: Across browser sessions until manually cleared

## Auto-Save Behavior

The app automatically saves state to localStorage:
- When any action is dispatched
- Wrapped in try-catch to handle storage quota errors
- Logs success/failure to console for debugging

## Retrieving Cached Data

On app initialization:
1. `loadInitialState()` attempts to read from localStorage
2. If cache exists and is valid, it restores the previous session state
3. If cache is invalid or missing, defaults to the initial empty state

## Clearing Cache

To clear all cached data:

```javascript
const { clearAllData } = useAppContext();
clearAllData(); // Resets to default empty state

// Or use utility directly:
import { clearAllCache } from '../utils/cacheManager';
clearAllCache(); // Removes all localStorage entries
```

## Error Handling

The caching system includes error handling:
- Invalid JSON in cache is caught and logged
- Storage quota errors are caught and logged
- App continues to function even if cache operations fail
- Console logs provide debugging information

## Browser Compatibility

- Works in all modern browsers
- localStorage is available in:
  - Chrome, Edge, Firefox, Safari (latest versions)
  - Mobile browsers (iOS Safari, Chrome Mobile)
- Automatically falls back to default state if localStorage is unavailable

## Best Practices

1. **Backup Important Data**: Use `exportStateAsJSON()` to download data periodically
2. **Monitor Cache Size**: Use `getCacheStats()` to check storage usage
3. **Test in Private Mode**: localStorage may not work in incognito/private mode
4. **Handle Quota Errors**: Consider warning users if localStorage is full
5. **Version Your Cache**: Consider adding a version field to detect incompatible cache formats

## Limitations

- localStorage typically has a 5-10MB limit per domain
- Not suitable for very large datasets
- Cache is deleted if user clears browser data
- Cache is separate per browser/domain

## Future Enhancements

Potential improvements:
- Add IndexedDB for larger storage capacity
- Implement data compression for cache
- Add versioning and migration system
- Implement cloud sync functionality
- Add selective backup/restore options
