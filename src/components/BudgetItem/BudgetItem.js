import styles from './BudgetItem.module.css';

const BudgetItem = (props) => {
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = props.item.date;

  const budgetItemDate = `${date.getDay()} ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`;

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
        {props.item.amount}
      </p>
    </li>
  );
};

export default BudgetItem;
