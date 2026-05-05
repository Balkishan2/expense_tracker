import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ExpenseList({ expenses, onDeleteExpense }) {
    const navigate = useNavigate();
    // console.log(expenses);
    if (expenses.length === 0) {
        return <p>No expenses found</p>;
    }
    return (
      <section className="card">
        <h2>Expense</h2>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Category</th>
              <th>Amount (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.title}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>
                  <button className="edit-btn" onClick={() => navigate(`/edit/${expense.id}`)}>Edit</button>
                  <button className="delete-btn" onClick={() => onDeleteExpense(expense.id)}>Delete</button>
                </td>
              </tr>
            ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total :</td>
                        <td>{ expenses.reduce((sum,expense) => Number(sum) + Number(expense.amount) , 0) }</td>
                    </tr>
                </tfoot>
        </table>
      </section>
    );
}
