import BudgetList from '../BudgetList/BudgetList';
import Add from '../Add/Add';
import styles from './MobileDashboard.module.css';
import { useState } from 'react';

const MobileDashboard = (props) => {
  const [currentBoard, setCurrentBoard] = useState('income');

  const setIncomeHandler = () => {
    setCurrentBoard('income');
  };

  const setExpensesHandler = () => {
    setCurrentBoard('expenses');
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.nav}>
        <div
          className={`${styles['nav-item']} ${
            currentBoard === 'income' ? styles.active : ''
          }`}
          onClick={setIncomeHandler}
        >
          Income
        </div>
        <div
          className={`${styles['nav-item']} ${
            currentBoard === 'income' ? '' : styles.active
          }`}
          onClick={setExpensesHandler}
        >
          Expenses
        </div>
      </div>
      {currentBoard === 'income' ? (
        <div className={styles.board}>
          <BudgetList
            type="income"
            items={props.items.income}
            onRemoveItem={props.onRemoveIncomeItem}
          />
          <Add
            onSetFormType={props.onSetFormType.bind(null, 'income')}
            onShowBudgetForm={props.onShowBudgetForm}
          />
        </div>
      ) : (
        <div className={styles.board}>
          <BudgetList
            type="expenses"
            items={props.items.expenses}
            onRemoveItem={props.onRemoveExpensesItem}
          />
          <Add
            onSetFormType={props.onSetFormType.bind(null, 'expenses')}
            onShowBudgetForm={props.onShowBudgetForm}
          />
        </div>
      )}
    </div>
  );
};

export default MobileDashboard;
