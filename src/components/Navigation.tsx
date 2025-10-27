import React from 'react';
import { Home, BarChart3, Settings } from 'lucide-react';
import { Link } from './Link';
import { useApp } from '@/context/AppContext';

export const Navigation: React.FC = () => {
  const { theme } = useApp();
  const currentPath = window.location.hash.slice(1) || '/';

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/stats', icon: BarChart3, label: 'Stats' },
    { path: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.bg,
        borderTop: `1px solid ${theme.border}`,
        padding: '0.75rem 1rem',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: isActive ? theme.text : theme.textSecondary,
              }}
            >
              <Icon size={20} />
              <span style={{ fontSize: '0.7rem' }}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
