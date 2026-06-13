import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import AddExpense from "./AddExpense";

export default function SideBar({ isOpen, onClose }) {
    function loadExpenseForm() {
        return <AddExpense />;
    }
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-close" onClick={onClose} aria-label="Close navigation">
        &times;
      </button>
      <ul>
        <li onClick={onClose}><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
        <li onClick={() => { loadExpenseForm(); onClose(); }} ><NavLink to="/add" className={({ isActive }) => isActive ? "active" : ""}>Add Expense</NavLink></li>
      </ul>
    </aside>
  );
}
