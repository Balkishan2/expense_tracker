import React from 'react'

export default function Navbar({ onToggleSidebar }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={onToggleSidebar} aria-label="Toggle Navigation">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="logo">💰 ExpenseTracker</div>
      </div>
      <div className="user-info">
        <span>Welcome, Balkishan</span>
        {/* <button className="logout-btn">Logout</button> */}
      </div>
    </header>
  );
}
