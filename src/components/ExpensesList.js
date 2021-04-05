import React from 'react';
import ExpensesItem from './ExpensesItem';

const ExpensesList = () => {
  const list = [
    { id: '1', name: 'shopping', cost: '40' },
    { id: '2', name: 'holiday', cost: '400' },
    { id: '3', name: 'car service', cost: '50' },
  ];
  return (
    <ul className='list-group'>
      {list.map((item) => (
        <ExpensesItem key={item.id} name={item.name} cost={item.cost} />
      ))}
    </ul>
  );
};

export default ExpensesList;
