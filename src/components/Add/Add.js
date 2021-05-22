import styles from './Add.module.css';

const Add = (props) => {
  const addClickHandler = () => {
    props.onSetFormType();
    props.onShowBudgetForm();
  };

  return (
    <button className={styles.add} type="button" onClick={addClickHandler}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default Add;
