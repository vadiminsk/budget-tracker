import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpensesItem = (props) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <span>
        <span className='badge badge-primary badge-pill mr-3'>
          £{props.cost}
        </span>
        <TiDelete size='1.5em'></TiDelete>
      </span>
    </li>
  );
};

export default ExpensesItem;
