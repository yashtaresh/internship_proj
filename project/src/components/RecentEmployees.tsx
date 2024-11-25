import { User } from 'lucide-react';

const recentEmployees = [
  {
    id: 1,
    name: 'John Smith',
    designation: 'Senior Developer',
    department: 'Engineering',
    joinDate: '2024-03-01',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    designation: 'Product Manager',
    department: 'Product',
    joinDate: '2024-02-15',
  },
  {
    id: 3,
    name: 'Michael Brown',
    designation: 'UI Designer',
    department: 'Design',
    joinDate: '2024-02-01',
  },
];

export default function RecentEmployees() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">Recent Employees</h3>
        <div className="mt-6 flow-root">
          <ul className="-my-5 divide-y divide-gray-200">
            {recentEmployees.map((employee) => (
              <li key={employee.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {employee.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {employee.designation} • {employee.department}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-gray-500">
                    Joined {new Date(employee.joinDate).toLocaleDateString()}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}