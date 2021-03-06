import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './BudgetForm.module.css';
import Modal from '../UI/Modal';

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

const BudgetForm = (props) => {
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const titleInputRef = useRef();
  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value.trim();
    const enteredAmount = parseInt(amountInputRef.current.value.trim());

    if (enteredTitle && enteredAmount >= 0) {
      const date = new Date();
      const budgetItem = {
        id: nanoid(10),
        title: enteredTitle,
        amount: enteredAmount,
        dateTime: {
          day: date.getDate(),
          month: MONTHS[date.getMonth()],
          year: date.getFullYear(),
          hours: date.getHours(),
          minutes: ('00' + date.getMinutes()).slice(-2),
        },
      };

      props.onAddItem(budgetItem);

      event.target.reset();

      titleInputRef.current.blur();
      amountInputRef.current.blur();

      props.onClose();
    } else {
      if (!enteredTitle) {
        setTitleIsValid(false);
      }

      if (!enteredAmount) {
        setAmountIsValid(false);
      }
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div
          className={`${styles.control} ${titleIsValid ? '' : styles.invalid}`}
        >
          <label htmlFor="title">Title</label>
          <input ref={titleInputRef} type="text" id="title" />
          <p>Please enter a valid title</p>
        </div>
        <div
          className={`${styles.control} ${amountIsValid ? '' : styles.invalid}`}
        >
          <label htmlFor="amount">Amount</label>
          <input ref={amountInputRef} type="number" id="amount" />
          <p>Please enter a valid amount</p>
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={props.onClose}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default BudgetForm;
