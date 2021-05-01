import { useEffect, useReducer } from 'react';
import Overview from './components/Overview/Overview';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import './App.css';

const EMPTY_STATE = {
  income: [],
  expenses: [],
};

const budgetReducer = (state, action) => {
  if (action.type === 'ADD_INCOME') {
    const updatedIncome = [...state.income];
    updatedIncome.unshift(action.item);
    return {
      income: updatedIncome,
      expenses: state.expenses,
    };
  } else if (action.type === 'ADD_EXPENSES') {
    const updatedExpenses = [...state.expenses];
    updatedExpenses.unshift(action.item);
    return {
      income: state.income,
      expenses: updatedExpenses,
    };
  } else if (action.type === 'REMOVE_INCOME') {
    const updatedIncome = state.income.filter((item) => item.id !== action.id);
    return {
      income: updatedIncome,
      expenses: state.expenses,
    };
  } else if (action.type === 'REMOVE_EXPENSES') {
    const updatedExpenses = state.expenses.filter(
      (item) => item.id !== action.id
    );
    return {
      income: state.income,
      expenses: updatedExpenses,
    };
  } else if (action.type === 'LOCAL_STORAGE_ITEMS') {
    return action.items;
  }

  return EMPTY_STATE;
};

function App() {
  const [budgetState, dispatchBudgetState] = useReducer(
    budgetReducer,
    EMPTY_STATE
  );

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem('budget'));
    if (localItems) {
      dispatchBudgetState({ type: 'LOCAL_STORAGE_ITEMS', items: localItems });
    }
  }, []);

  useEffect(() => {
    if (budgetState.income.length === 0 && budgetState.expenses.length === 0) {
      localStorage.removeItem('budget');
    } else {
      localStorage.setItem('budget', JSON.stringify(budgetState));
    }
  }, [budgetState]);

  const addIncomeItemHandler = (budgetItem) => {
    dispatchBudgetState({ type: 'ADD_INCOME', item: budgetItem });
  };

  const addExpensesItemHandler = (budgetItem) => {
    dispatchBudgetState({ type: 'ADD_EXPENSES', item: budgetItem });
  };

  const removeIncomeItemHandler = (budgetItemId) => {
    dispatchBudgetState({ type: 'REMOVE_INCOME', id: budgetItemId });
  };

  const removeExpensesItemHandler = (budgetItemId) => {
    dispatchBudgetState({ type: 'REMOVE_EXPENSES', id: budgetItemId });
  };

  return (
    <>
      <div className="container">
        <Overview items={budgetState} />
        <Dashboard
          items={budgetState}
          onAddIncomeItem={addIncomeItemHandler}
          onRemoveIncomeItem={removeIncomeItemHandler}
          onAddExpensesItem={addExpensesItemHandler}
          onRemoveExpensesItem={removeExpensesItemHandler}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
