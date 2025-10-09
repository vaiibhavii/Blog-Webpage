import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1>Our Blog</h1>
        <p>Home / Blog</p>
      </div>
    </header>
  );
}