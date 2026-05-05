import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpense({onAddExpense}) {
    const navigate = useNavigate();
    const [expense, setExpense] = useState({
      title: "",
      amount: "",
      category: "",
      date: "",
    });
    const handleChange = (e) => {
    const { name, value } = e.target;

    setExpense({
        ...expense,
        [name]: value,
    });
    };
    const putExpense = (e) =>{
      e.preventDefault();
      const { title, amount, category, date } = expense;

      if (!title || !amount || !category || !date) {
        alert("Please enter all values");
        return;
      }

      onAddExpense({
        ...expense,
        id: Date.now(),
      });
        setExpense({
            title: "",
            amount: "",
            category: "",
            date: "",
        });
        navigate("/");
    }
  return (
    <section>
      <h2>Add New Expense</h2>
      <form onSubmit={putExpense}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="e.g. Food, Rent"
            name="title"
            onChange={handleChange}
            value={expense.title}
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            name="amount"
            onChange={handleChange}
            value={expense.amount}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            onChange={handleChange}
            value={expense.category}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={expense.date}
          />
        </div>

        <button type="submit" className="btn-primary">
          Add
        </button>
      </form>
    </section>
  );
}
