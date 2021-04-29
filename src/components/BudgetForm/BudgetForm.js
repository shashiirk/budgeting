import { useRef } from 'react';
import styles from './BudgetForm.module.css';

const BudgetForm = (props) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const budgetItem = {
      title: titleInputRef.current.value.trim(),
      amount: amountInputRef.current.value.trim(),
      date: new Date(),
    };

    props.onAddItem(budgetItem);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <input ref={titleInputRef} type="text" placeholder="Title" />
      <input ref={amountInputRef} type="number" placeholder="Amount" />
      <button type="submit">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default BudgetForm;
