import React, { useState } from "react";
import './ExpenseForm.css';


// solution No.1
// const ExpenseForm = (props) => {

//   // multi usestate example 
//   // const [enteredTitle, setEnteredTitle] = useState("");
//   // const [enteredAmount, setEnteredAmount] = useState("");
//   // const [enteredDate, setEnteredDate] = useState("");


//   // create use state with object
//   const [inputUser, setInputUser] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   })

//   const titleChangeHandler = (event) => {
//     setInputUser((inputUser) => {
//       return { ...inputUser, title: event.target.value }
//     })
//   }
//   const amountChangeHandler = (event) => {
//     setInputUser((inputUser) => {
//       return { ...inputUser, amount: event.target.value }
//     })
//   }
//   const dateChangeHandler = (event) => {
//     setInputUser((inputUser) => {
//       return { ...inputUser, date: event.target.value }
//     })

//   }

//   // multi usestate example 
//   // const titleChangeHandler = (event) => {
//   //   setEnteredTitle(event.target.value)
//   // }

//   // const amountChangeHandler = (event) => {
//   //   setEnteredAmount(event.target.value)
//   // }

//   // const dateChangeHandler = (event) => {
//   //   setEnteredDate(event.target.value)
//   // }


//   //form handler
//   const submitHandler = (e) => {
//     e.preventDefault();

//     // create coustom object to save input from user
//     const { title, amount, date } = inputUser
//     const expenseData = { title, amount, date };
//     //passing data to newExpense.js through function
//     props.onSaveExpenseData(expenseData);
//     // extract variable from expenseData object
//     // const { userName: title, userAmount: amount, userDate: date } = expenseData;
//     // console.log(title);
//     // console.log(amount);
//     // console.log(date);
//     // setInputUser({ title: "", amount: "", date: "" });


//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type='text' onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expenses</button>
//       </div>

//     </form>
//   )



// solution 2
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);

  };


  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancle}> Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
