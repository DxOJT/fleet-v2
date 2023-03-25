// components
import CardComponent from '../../components/admin/dashboardCard';

export default Dashboard = () => {
  const sampledata = [
    { id: 1, count: 0, description: 'Franchise  in One  (1) month' },
    { id: 2, count: 0, description: 'Vehicle Registration expiring in (1) month' },
    { id: 3, count: 0, description: "Driver's License expiring in one  (1) month" },
    { id: 4, count: 0, description: 'Insurance Expiring in One  (1) month' },
  ];
  return (
    <div>
      <div className="flex w-full flex-wrap">
        {sampledata.map((value) => (
          <CardComponent value={value} key={value.id} />
        ))}
      </div>
    </div>
  );
};
