import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import AddExpense from "./AddExpense";

export default function SideBar() {
    function loadExpenseForm() {
        return <AddExpense />;
    }
  return (
    <aside className="sidebar">
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
        <li onClick={() => { loadExpenseForm(); }} ><NavLink to="/add" className={({ isActive }) => isActive ? "active" : ""}>Add Expense</NavLink></li>
      </ul>
    </aside>
  );
}
