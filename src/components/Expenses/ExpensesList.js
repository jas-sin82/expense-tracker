import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h4 className='expenses-list__fallback'> Expense not Found </h4>
  }

  return (
    <u className='expenses-list'>
      {props.items.map(item =>
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      )}
    </u>

  )
}

export default ExpensesList;
