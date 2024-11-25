import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Employee } from '../types';

const MOCK_EMPLOYEES: Employee[] = [
  {
    f_Id: '1',
    f_Image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    f_Name: 'John Smith',
    f_Email: 'john.smith@company.com',
    f_Mobile: '(555) 123-4567',
    f_Designation: 'Senior Developer'
  },
  {
    f_Id: '2',
    f_Image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    f_Name: 'Sarah Johnson',
    f_Email: 'sarah.johnson@company.com',
    f_Mobile: '(555) 234-5678',
    f_Designation: 'Product Manager'
  },
  {
    f_Id: '3',
    f_Image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    f_Name: 'Michael Brown',
    f_Email: 'michael.brown@company.com',
    f_Mobile: '(555) 345-6789',
    f_Designation: 'UI Designer'
  }
];

export default function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [employees] = useState<Employee[]>(MOCK_EMPLOYEES);

  const filteredEmployees = employees.filter(employee =>
    employee.f_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.f_Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.f_Designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
        <Link
          to="/employees/new"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Employee
        </Link>
      </div>

      <div className="flex items-center max-w-md">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEmployees.map((employee) => (
              <tr key={employee.f_Id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded-full object-cover" src={employee.f_Image} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{employee.f_Name}</div>
                      <div className="text-sm text-gray-500">{employee.f_Email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{employee.f_Mobile}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {employee.f_Designation}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    to={`/employees/${employee.f_Id}`}
                    className="text-blue-600 hover:text-blue-900 inline-flex items-center mr-4"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Link>
                  <button
                    onClick={() => {/* Handle delete */}}
                    className="text-red-600 hover:text-red-900 inline-flex items-center"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}