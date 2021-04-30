import styles from './BudgetItem.module.css';

const getIndianCurrency = (num) => {
  return num.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
};

const BudgetItem = (props) => {
  const date = props.item.dateTime;

  const budgetItemDate = `${date.day} ${date.month} ${date.year} | ${date.hours}:${date.minutes}`;

  const removeItemHandler = () => {
    props.onRemove(props.item.id);
  };

  return (
    <li className={styles.item}>
      <div className={styles.box}>
        <p className={styles.title}>{props.item.title}</p>
        <p className={styles.date}>{budgetItemDate}</p>
      </div>
      <p
        className={
          props.type === 'income'
            ? styles['income-amount']
            : styles['expenses-amount']
        }
      >
        {getIndianCurrency(props.item.amount)}
      </p>
      <div className={styles.delete} onClick={removeItemHandler}>
        <i className="fas fa-minus-circle"></i>
      </div>
    </li>
  );
};

export default BudgetItem;
