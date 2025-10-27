import React, { useEffect, useState } from 'react';

interface RouteProps {
  path: string;
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({ component: Component }) => {
  return <Component />;
};

export const Router: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(window.location.hash.slice(1) || '/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {React.Children.map(children, child =>
        React.isValidElement(child) && child.props.path === currentPath ? child : null
      )}
    </>
  );
};
