import React from 'react';
import { useApp } from '@/context/AppContext';

const StatsPage: React.FC = () => {
  const { tasks } = useApp();
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {tasks.length - completed}</p>
    </div>
  );
};

export default StatsPage;
