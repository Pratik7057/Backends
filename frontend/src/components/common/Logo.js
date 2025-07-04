import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '', variant = 'default' }) => {
  const baseClasses = 'font-bold text-xl tracking-tight';
  const colorClasses = variant === 'light' 
    ? 'text-white'
    : 'text-primary-600 dark:text-primary-400';
  
  return (
    <Link to="/" className={`${baseClasses} ${colorClasses} ${className}`}>
      <span className="flex items-center">
        <span className="mr-1.5">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
          >
            <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
          </svg>
        </span>
        Radha<span className="font-extrabold text-secondary-600 dark:text-secondary-400">API</span>
      </span>
    </Link>
  );
};

export default Logo;
