import React from 'react';
import { useApp } from '@/context/AppContext';
import { Trash2, Moon, Sun } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const { darkMode, setDarkMode, setTasks, theme } = useApp();

  const clearTasks = () => {
    if (confirm('Delete all tasks?')) setTasks([]);
  };

  return (
    <div>
      <h2>Settings</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun /> : <Moon />} Toggle Theme
      </button>
      <button onClick={clearTasks}>
        <Trash2 /> Clear All Tasks
      </button>
    </div>
  );
};

export default SettingsPage;
