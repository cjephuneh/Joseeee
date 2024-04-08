import React from 'react';
// Import any additional components you might use like charts or progress bars

const DashboardComponent = () => {
  // Dummy data for the statistics, replace with real data
  const stats = [
    { label: 'All', value: 3, color: 'text-gray-600' },
    { label: 'In Progress', value: 0, color: 'text-blue-600' },
    { label: 'On Hold', value: 0, color: 'text-yellow-600' },
    { label: 'Completed', value: 1, color: 'text-green-600' },
  ];

  // Dummy data for perspectives performance
  const perspectives = [
    { label: 'FS', value: '0%', color: 'bg-red-200' },
    { label: 'CS', value: '0%', color: 'bg-green-200' },
    { label: 'PS', value: '0%', color: 'bg-yellow-200' },
    { label: 'ES', value: '0%', color: 'bg-purple-200' },
  ];

  return (
    <div className="bg-white rounded p-5 mt-5 text-black px-20">
      <h1 className="text-xl font-semibold text-black mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Stats */}
        {stats.map((stat) => (
          <div key={stat.label} className={`shadow rounded p-4 ${stat.color}`}>
            <p className="font-bold">{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
        {/* Overall Progress */}
        <div className="flex-1 bg-gray-100 p-4 shadow rounded">
          <h3 className="font-semibold mb-4">Overall Progress</h3>
          {/* Placeholder for progress bar */}
          <div className="h-40">Circular Progress Bar Here</div>
          <p>Completion 33%</p>
        </div>
        {/* Perspectives Performance */}
        <div className="flex-1 bg-gray-100 p-4 shadow rounded">
          <h3 className="font-semibold mb-4">Perspectives Performance</h3>
          <div className="flex justify-around">
            {/* Placeholder for performance meters */}
            {perspectives.map((perspective) => (
              <div key={perspective.label} className={`${perspective.color} w-20 h-20 rounded-full flex items-center justify-center shadow-inner`}>
                {perspective.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
