import React from 'react';
import { useAppContext } from '../../utils/useAppContext';
import { getCacheStats, exportStateAsJSON, backupState, clearAllCache } from '../../utils/cacheManager';

/**
 * Example component demonstrating the caching system
 * Shows how to use cache utilities and context hooks
 */
function CacheManagementExample() {
  const { global_state, clearAllData } = useAppContext();

  const handleExportData = () => {
    exportStateAsJSON(global_state, `odapi_backup_${new Date().toISOString()}.json`);
    alert('Data exported successfully!');
  };

  const handleCreateBackup = () => {
    backupState(global_state);
    alert('Backup created! You can restore it later if needed.');
  };

  const handleClearCache = () => {
    if (window.confirm('Are you sure you want to clear all cached data? This cannot be undone.')) {
      clearAllCache();
      clearAllData();
      alert('Cache cleared and app reset to default state.');
    }
  };

  const handleViewStats = () => {
    const stats = getCacheStats();
    console.log('Cache Statistics:', stats);
    alert(`Cache Stats:\n${JSON.stringify(stats, null, 2)}`);
  };

  return (
    <div className="cache-management">
      <h2>Cache Management</h2>
      
      <div className="stats-section">
        <h3>Cached Data Overview</h3>
        <div className="stat-item">
          <span>RoI Cards:</span>
          <strong>{global_state.RoI.length}</strong>
        </div>
        <div className="stat-item">
          <span>Starting Amount Cards:</span>
          <strong>{global_state.depart.length}</strong>
        </div>
        <div className="stat-item">
          <span>Iteration Cards:</span>
          <strong>{global_state.iterations.length}</strong>
        </div>
        <div className="stat-item">
          <span>Ratio Cards:</span>
          <strong>{global_state.ratio.length}</strong>
        </div>
      </div>

      <div className="buttons-section">
        <button onClick={handleViewStats} className="btn btn-info">
          📊 View Cache Stats
        </button>
        <button onClick={handleCreateBackup} className="btn btn-primary">
          💾 Create Backup
        </button>
        <button onClick={handleExportData} className="btn btn-success">
          ⬇️ Export Data
        </button>
        <button onClick={handleClearCache} className="btn btn-danger">
          🗑️ Clear Cache
        </button>
      </div>

      <div className="info-section">
        <h3>How it Works</h3>
        <ul>
          <li>All data is automatically saved to browser cache</li>
          <li>Data persists across browser sessions</li>
          <li>Use "Export Data" to download your data as JSON</li>
          <li>Use "Create Backup" to save a recovery point</li>
          <li>Use "Clear Cache" to reset everything to default</li>
        </ul>
      </div>
    </div>
  );
}

export default CacheManagementExample;
