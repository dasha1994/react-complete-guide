import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = props => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(false);
        console.log(expenseData);
    }

    const resetFormHandler = () => {
        setShowForm(false);
    }

   let [showForm, setShowForm] = useState(false);
   const addNewExpenseHandler = () => {
       setShowForm(true);
   }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={addNewExpenseHandler}>Add new expense</button>}
            {showForm && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onResetForm={resetFormHandler}/>}
        </div>
    );
}

export default NewExpense;