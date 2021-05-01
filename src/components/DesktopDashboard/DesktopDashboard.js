import BudgetList from '../BudgetList/BudgetList';
import BudgetForm from '../BudgetForm/BudgetForm';
import styles from './DesktopDashboard.module.css';

const DesktopDashboard = (props) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.board}>
        <h2 className={styles.title}>Income</h2>
        <BudgetList
          type="income"
          items={props.items.income}
          onRemoveItem={props.onRemoveIncomeItem}
        />
        <BudgetForm onAddItem={props.onAddIncomeItem} />
      </div>
      <div className={styles.board}>
        <h2 className={styles.title}>Expenses</h2>
        <BudgetList
          type="expenses"
          items={props.items.expenses}
          onRemoveItem={props.onRemoveExpensesItem}
        />
        <BudgetForm onAddItem={props.onAddExpensesItem} />
      </div>
    </div>
  );
};

export default DesktopDashboard;
