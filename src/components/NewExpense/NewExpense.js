import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { id: Math.floor(Math.random() * 10000).toString(), ...enteredExpenseData };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditing = () => {
    setIsEditing(false);
  }



  return (
    <div className='new-expense'>
      {isEditing === false ? <button onClick={startEditingHandler}>Add New Expense</button>
        : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditing} />
      }
    </div>
  )
}


export default NewExpense;
