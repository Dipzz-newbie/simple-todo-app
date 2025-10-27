import React from 'react';

export const Link: React.FC<{
  to: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ to, children, style }) => (
  <a href={`#${to}`} style={{ textDecoration: 'none', ...style }}>
    {children}
  </a>
);
