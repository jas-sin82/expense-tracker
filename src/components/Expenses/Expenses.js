import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";



const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");
  const items = props.items;
  console.log(items)

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filterExpenses = items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  })

  return (
    <>
      <Card className="expenses">
        < ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </>
  )
}


export default Expenses;
