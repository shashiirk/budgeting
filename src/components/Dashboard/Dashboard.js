import { useEffect, useState } from 'react';
import DesktopDashboard from '../DesktopDashboard/DesktopDashboard';
import MobileDashboard from '../MobileDashboard/MobileDashboard';

const Dashboard = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return width >= 600 ? (
    <DesktopDashboard
      items={props.items}
      onAddIncomeItem={props.onAddIncomeItem}
      onRemoveIncomeItem={props.onRemoveIncomeItem}
      onAddExpensesItem={props.onAddExpensesItem}
      onRemoveExpensesItem={props.onRemoveExpensesItem}
    />
  ) : (
    <MobileDashboard
      items={props.items}
      onAddIncomeItem={props.onAddIncomeItem}
      onRemoveIncomeItem={props.onRemoveIncomeItem}
      onAddExpensesItem={props.onAddExpensesItem}
      onRemoveExpensesItem={props.onRemoveExpensesItem}
    />
  );
};

export default Dashboard;
