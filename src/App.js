import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpensesList from './components/ExpensesList';
import AddExpenseForm from './components/AddExpenseForm';
import { MyProvider } from './context/AppContext';

const App = () => {
  return (
    <MyProvider>
      <div className='container'>
        <h1 className='mb-3'>My Budget Planner</h1>
        <div className='row mb-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mb-3'>Expenses</h3>
        <div className='row mb-3'>
          <div className='col-sm'>
            <ExpensesList />
          </div>
        </div>
        <h3 className='mb-3'>Add expense</h3>
        <div className='row mb-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </MyProvider>
  );
};

export default App;
