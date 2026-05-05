import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">💰 ExpenseTracker</div>
      <div className="user-info">
        <span>Welcome, Balkishan</span>
        {/* <button className="logout-btn">Logout</button> */}
      </div>
    </header>
  );
}
