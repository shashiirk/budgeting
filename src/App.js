import Overview from './components/Overview/Overview';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const DUMMY_ITEMS = {
    income: [
      {
        title: 'Salary',
        amount: 30000,
        date: new Date(),
      },
      {
        title: 'Bonus',
        amount: 5000,
        date: new Date(),
      },
    ],
    expenses: [
      {
        title: 'Rent',
        amount: 10000,
        date: new Date(),
      },
      {
        title: 'Food',
        amount: 8000,
        date: new Date(),
      },
    ],
  };

  const addIncomeItemHandler = (budgetItem) => {
    console.log(budgetItem);
  };

  const addExpensesItemHandler = () => {};

  return (
    <>
      <div className="container">
        <Overview items={DUMMY_ITEMS} />
        <Dashboard
          onAddIncomeItem={addIncomeItemHandler}
          onAddExpensesItem={addExpensesItemHandler}
          items={DUMMY_ITEMS}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
