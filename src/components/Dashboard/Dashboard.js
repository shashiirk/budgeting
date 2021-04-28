import styles from './Dashboard.module.css';

const Dashboard = (props) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.board}>
        <h2 className={styles.title}>Income</h2>
      </div>
      <div className={styles.board}>
        <h2 className={styles.title}>Expenses</h2>
      </div>
    </div>
  );
};

export default Dashboard;
