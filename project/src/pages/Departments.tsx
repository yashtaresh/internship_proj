import { Plus, Building2, Users, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Department {
  id: string;
  name: string;
  head: string;
  employeeCount: number;
  budget: string;
  status: 'active' | 'inactive';
}

const MOCK_DEPARTMENTS: Department[] = [
  {
    id: '1',
    name: 'Engineering',
    head: 'John Smith',
    employeeCount: 45,
    budget: '$450,000',
    status: 'active',
  },
  {
    id: '2',
    name: 'Product',
    head: 'Sarah Johnson',
    employeeCount: 32,
    budget: '$320,000',
    status: 'active',
  },
  {
    id: '3',
    name: 'Design',
    head: 'Michael Brown',
    employeeCount: 28,
    budget: '$280,000',
    status: 'active',
  },
  {
    id: '4',
    name: 'Marketing',
    head: 'Emily Davis',
    employeeCount: 19,
    budget: '$190,000',
    status: 'active',
  },
];

export default function Departments() {
  const [departments] = useState<Department[]>(MOCK_DEPARTMENTS);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Departments</h1>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Department
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <div
            key={department.id}
            className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
          >
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-2 text-lg font-medium text-gray-900">
                    {department.name}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-500">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{department.employeeCount} Employees</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Department Head</span>
                  <span className="text-gray-900 font-medium">{department.head}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Annual Budget</span>
                  <span className="text-gray-900 font-medium">{department.budget}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Status</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {department.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}