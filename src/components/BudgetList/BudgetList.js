import BudgetItem from '../BudgetItem/BudgetItem';
import styles from './BudgetList.module.css';

const BudgetList = (props) => {
  const budgetItems = props.items.map((item) => (
    <BudgetItem
      key={item.id}
      type={props.type}
      item={item}
      onRemove={props.onRemoveItem}
    />
  ));

  const innerContent =
    budgetItems.length > 0 ? (
      budgetItems
    ) : (
      <p className={styles.empty}>
        Looks like you haven't added anything here yet. Add your first{' '}
        {props.type} item by filling the below form.
      </p>
    );

  return <ul className={styles.list}>{innerContent}</ul>;
};

export default BudgetList;
