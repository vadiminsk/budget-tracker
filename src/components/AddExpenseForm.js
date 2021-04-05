import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AddExpenseForm = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const context = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();

    context.addPlayer(name, cost);
    setName('');
    setCost('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row mb-3'>
        <div className='col-sm'>
          <label htmlFor='name'>Name</label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className='col-sm'>
          <label htmlFor='cost'>Cost</label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='cost'
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
