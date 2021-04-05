import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppContext = React.createContext();

class MyProvider extends Component {
  state = {
    budget: 2000,
    expenses: [
      { id: '1', name: 'shopping', cost: '40' },
      { id: '2', name: 'holiday', cost: '400' },
      { id: '3', name: 'car service', cost: '50' },
    ],
  };

  addPlayerHandler = (name, cost) => {
    let newItem = { id: uuidv4(), name: name, cost: cost };
    this.setState((prevState) => ({
      expenses: [...prevState.expenses, newItem],
    }));
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          budget: this.state.budget,
          expenses: this.state.expenses,
          addPlayer: this.addPlayerHandler,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, MyProvider };
