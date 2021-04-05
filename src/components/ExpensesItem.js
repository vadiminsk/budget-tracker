import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpensesItem = (props) => {
  const context = useContext(AppContext);

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <span>
        <span className='badge badge-primary badge-pill mr-3'>
          £{props.cost}
        </span>
        <TiDelete
          size='1.5em'
          onClick={() => context.removePlayer()}
        ></TiDelete>
      </span>
    </li>
  );
};

export default ExpensesItem;
