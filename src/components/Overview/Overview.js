import styles from './Overview.module.css';

const Overview = (props) => {
  const incomeAmount = props.items.income.reduce(
    (prev, cur) => prev + cur.amount,
    0
  );
  const expenseAmount = props.items.expenses.reduce(
    (prev, cur) => prev + cur.amount,
    0
  );
  const totalBalance = incomeAmount - expenseAmount;

  return (
    <div className={styles.overview}>
      <div className={styles.balance}>
        <h2 className={styles.title}>Total Balance</h2>
        <p className={styles.amount}>{totalBalance}</p>
      </div>
      <div className={styles['income-expense']}>
        <div className={styles.income}>
          <h2 className={styles.title}>Income</h2>
          <p className={styles.amount}>{incomeAmount}</p>
        </div>
        <div className={styles.expense}>
          <h2 className={styles.title}>Expenses</h2>
          <p className={styles.amount}>{expenseAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
