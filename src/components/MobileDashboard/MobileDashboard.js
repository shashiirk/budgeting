import BudgetList from '../BudgetList/BudgetList';
import BudgetForm from '../BudgetForm/BudgetForm';
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
          <BudgetForm onAddItem={props.onAddIncomeItem} />
        </div>
      ) : (
        <div className={styles.board}>
          <BudgetList
            type="expenses"
            items={props.items.expenses}
            onRemoveItem={props.onRemoveExpensesItem}
          />
          <BudgetForm onAddItem={props.onAddExpensesItem} />
        </div>
      )}
    </div>
  );
};

export default MobileDashboard;
