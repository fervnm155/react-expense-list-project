import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2022");

  const selectedYear = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear() == yearFilter
  );
  // console.log('filtro');
  // console.log(props.expenses[0].date.getFullYear());
  // console.log('yearfilter');
  // console.log(yearFilter);
  // console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onSelectedYear={selectedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
