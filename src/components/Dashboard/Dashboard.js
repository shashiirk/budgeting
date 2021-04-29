import BudgetList from '../BudgetList/BudgetList';
import BudgetForm from '../BudgetForm/BudgetForm';
import styles from './Dashboard.module.css';

const Dashboard = (props) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.board}>
        <h2 className={styles.title}>Income</h2>
        <BudgetList type="income" items={props.items.income} />
        <BudgetForm onAddItem={props.onAddIncomeItem} />
      </div>
      <div className={styles.board}>
        <h2 className={styles.title}>Expenses</h2>
        <BudgetList type="expenses" items={props.items.expenses} />
        <BudgetForm onAddItem={props.onAddExpenseItem} />
      </div>
    </div>
  );
};

export default Dashboard;
