import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'purple';
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
};

export default function StatCard({ title, value, trend, icon: Icon, color }: StatCardProps) {
  return (
    <div className="bg-white overflow-hidden rounded-lg shadow">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`${colorClasses[color]} p-3 rounded-md`}>
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {trend}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}