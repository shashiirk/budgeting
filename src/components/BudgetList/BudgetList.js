import BudgetItem from '../BudgetItem/BudgetItem';
import styles from './BudgetList.module.css';

const BudgetList = (props) => {
  const budgetItems = props.items.map((item) => (
    <BudgetItem type={props.type} item={item} />
  ));

  return <ul className={styles.list}>{budgetItems}</ul>;
};

export default BudgetList;
