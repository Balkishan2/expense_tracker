import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import SideBar from './SideBar';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import EditExpense from "./EditExpense";



function App() {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState(() => {
    const savedExp = localStorage.getItem("expenses");
    return savedExp && savedExp !== "undefined" ? JSON.parse(savedExp) : [];
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [
      ...prev,
      expense
    ])
  }
  
  const deleteExpense = (index) => {
    setExpenses((prev) => prev.filter((item) => item.id != index))
  };

  const editExpense = (updated) => {
    // console.log(updated);
    setExpenses((prev) => {
      return prev.map((item) => {
        if (item.id === updated.id) {
          return updated;
        }
        return item;
      })
    })
    };
  return (
    <>
        <Navbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
        <div className="main-container">
          <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <ExpenseList
                    expenses={expenses}
                    onDeleteExpense={deleteExpense}
                    onEditExpense={editExpense}
                  />
                }
              />
              <Route
                path="/add"
                element={<AddExpense onAddExpense={addExpense} />}
              />
              <Route
                path="/edit/:id"
                element={<EditExpense expenses={expenses} onEditExpense={editExpense} />}
              />
            </Routes>
          </main>
        </div>
    </>
  );
}

export default App
