import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //   let expensesContent = <p>No expenses found. unu</p>;
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">(/°o°)/ No expenses found. "F"</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
