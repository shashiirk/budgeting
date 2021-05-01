import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './BudgetForm.module.css';

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

  let titleTimerId;
  let amountTimerId;

  const animateInputTitle = () => {
    setTitleIsValid(false);

    if (titleTimerId) {
      clearTimeout(titleTimerId);
      titleTimerId = setTimeout(() => {
        setTitleIsValid(true);
      }, 300);
    } else {
      titleTimerId = setTimeout(() => {
        setTitleIsValid(true);
      }, 300);
    }
  };

  const animateInputAmount = () => {
    setAmountIsValid(false);

    if (amountTimerId) {
      clearTimeout(amountTimerId);
      amountTimerId = setTimeout(() => {
        setAmountIsValid(true);
      }, 300);
    } else {
      amountTimerId = setTimeout(() => {
        setAmountIsValid(true);
      }, 300);
    }
  };

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
    } else {
      if (!enteredTitle) {
        animateInputTitle();
      }

      if (!enteredAmount) {
        animateInputAmount();
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <input
        className={titleIsValid ? '' : styles.error}
        ref={titleInputRef}
        type="text"
        placeholder="Title"
      />
      <input
        className={amountIsValid ? '' : styles.error}
        ref={amountInputRef}
        type="number"
        placeholder="Amount"
      />
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default BudgetForm;
