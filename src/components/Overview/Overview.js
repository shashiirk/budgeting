import styles from './Overview.module.css';

const Overview = (props) => {
  return (
    <div className={styles.overview}>
      <div className={styles.balance}>
        <h2 className={styles.title}>Total Balance</h2>
        <p className={styles.amount}>20000</p>
      </div>
      <div className={styles['income-expense']}>
        <div className={styles.income}>
          <h2 className={styles.title}>Income</h2>
          <p className={styles.amount}>30000</p>
        </div>
        <div className={styles.expense}>
          <h2 className={styles.title}>Expenses</h2>
          <p className={styles.amount}>10000</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
