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
      },
      {
        title: 'Bonus',
        amount: 5000,
      },
    ],
    expenses: [
      {
        title: 'Rent',
        amount: 10000,
      },
      {
        title: 'Food',
        amount: 8000,
      },
    ],
  };

  return (
    <>
      <div className="container">
        <Overview items={DUMMY_ITEMS} />
        <Dashboard items={DUMMY_ITEMS} />
      </div>
      <Footer />
    </>
  );
}

export default App;
