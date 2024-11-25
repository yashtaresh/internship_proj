import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Employee } from '../types';

const employeeSchema = z.object({
  f_Name: z.string().min(1, 'Name is required'),
  f_Email: z.string().email('Invalid email address'),
  f_Mobile: z.string().min(10, 'Invalid phone number'),
  f_Designation: z.string().min(1, 'Designation is required'),
  f_Image: z.string().url('Invalid image URL').optional(),
});

type EmployeeFormData = z.infer<typeof employeeSchema>;

export default function EmployeeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
  });

  useEffect(() => {
    if (id) {
      // Fetch employee data and set form values
      // This is where you'd typically make an API call
      setIsLoading(true);
      // Simulating API call with mock data
      setTimeout(() => {
        const mockEmployee: Employee = {
          f_Id: id,
          f_Name: 'John Smith',
          f_Email: 'john.smith@company.com',
          f_Mobile: '(555) 123-4567',
          f_Designation: 'Senior Developer',
          f_Image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        };
        reset(mockEmployee);
        setIsLoading(false);
      }, 500);
    }
  }, [id, reset]);

  const onSubmit = async (data: EmployeeFormData) => {
    try {
      setIsLoading(true);
      // Here you would typically make an API call to save the data
      console.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      navigate('/employees');
    } catch (error) {
      console.error('Error saving employee:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        {id ? 'Edit Employee' : 'Add New Employee'}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow rounded-lg p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register('f_Name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.f_Name && (
            <p className="mt-1 text-sm text-red-600">{errors.f_Name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('f_Email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.f_Email && (
            <p className="mt-1 text-sm text-red-600">{errors.f_Email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile</label>
          <input
            type="tel"
            {...register('f_Mobile')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.f_Mobile && (
            <p className="mt-1 text-sm text-red-600">{errors.f_Mobile.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Designation</label>
          <input
            type="text"
            {...register('f_Designation')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.f_Designation && (
            <p className="mt-1 text-sm text-red-600">{errors.f_Designation.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
          <input
            type="url"
            {...register('f_Image')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.f_Image && (
            <p className="mt-1 text-sm text-red-600">{errors.f_Image.message}</p>
          )}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/employees')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {id ? 'Update Employee' : 'Add Employee'}
          </button>
        </div>
      </form>
    </div>
  );
}