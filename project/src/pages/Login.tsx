import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Lock, User } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loginSchema = z.object({
  f_userName: z.string().min(1, 'Username is required'),
  f_Pwd: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      setError('');
      // For demo purposes, simulate a successful login
      // In production, replace this with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful response
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          f_userName: data.f_userName,
          f_sno: 1
        }
      };
      
      localStorage.setItem('token', mockResponse.token);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid username or password');
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <div className="relative">
              <input
                {...register('f_userName')}
                className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            {errors.f_userName && (
              <p className="mt-1 text-sm text-red-600">{errors.f_userName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                {...register('f_Pwd')}
                type="password"
                className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            {errors.f_Pwd && (
              <p className="mt-1 text-sm text-red-600">{errors.f_Pwd.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}