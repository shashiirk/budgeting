import BudgetItem from '../BudgetItem/BudgetItem';
import styles from './BudgetList.module.css';
import img from '../../assets/search.svg';

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
      <div className={styles.empty}>
        <div className={styles.img}>
          <img src={img} alt="a women busy in searching" />
        </div>
        <p>No transactions yet</p>
      </div>
    );

  return <ul className={styles.list}>{innerContent}</ul>;
};

export default BudgetList;
