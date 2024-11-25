import { Users, Briefcase, TrendingUp } from 'lucide-react';
import StatCard from '../components/StatCard';
import RecentEmployees from '../components/RecentEmployees';
import DepartmentChart from '../components/DepartmentChart';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Employees"
          value="124"
          trend="+5.4%"
          icon={Users}
          color="blue"
        />
        <StatCard 
          title="Departments"
          value="8"
          trend="0%"
          icon={Briefcase}
          color="green"
        />
        <StatCard 
          title="Performance"
          value="92%"
          trend="+2.1%"
          icon={TrendingUp}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentEmployees />
        <DepartmentChart />
      </div>
    </div>
  );
}