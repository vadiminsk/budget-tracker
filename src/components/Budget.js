import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const context = useContext(AppContext);

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {context.budget}</span>
    </div>
  );
};

export default Budget;
