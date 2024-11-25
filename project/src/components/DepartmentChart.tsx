export default function DepartmentChart() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900">Department Distribution</h3>
      <div className="mt-6">
        <div className="space-y-4">
          {[
            { name: 'Engineering', count: 45, percentage: 36 },
            { name: 'Product', count: 32, percentage: 26 },
            { name: 'Design', count: 28, percentage: 23 },
            { name: 'Marketing', count: 19, percentage: 15 },
          ].map((dept) => (
            <div key={dept.name}>
              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-600">{dept.name}</div>
                <div className="text-gray-900 font-medium">{dept.count}</div>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${dept.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}