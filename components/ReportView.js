import React from 'react';

const ProjectReportsComponent = () => {
  // Placeholder data for projects
  const projects = [
    {
      id: 1,
      title: 'Sample 1',
      department: 'Administration',
      manager: '../assets/man.png', // Replace with actual image path
      budget: '2,500,000.00',
      expenditure: '4,000,000.00',
      // Add other project details as necessary
    },
    {
        id: 2,
        title: 'Sample 1',
        department: 'Administration',
        manager: '../assets/man.png', // Replace with actual image path
        budget: '2,500,000.00',
        expenditure: '4,000,000.00',
        // Add other project details as necessary
      },
      {
        id: 3,
        title: 'Sample 1',
        department: 'Administration',
        manager: '../assets/man.png', // Replace with actual image path
        budget: '2,500,000.00',
        expenditure: '4,000,000.00',
        // Add other project details as necessary
      },
    // ... more projects
  ];

  return (
    <div className="container mx-auto my-6 p-6 bg-white shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Project Reports</h2>
      <div className="mb-4 flex justify-between items-center">
        <div>
          {/* Search input */}
          <input type="text" placeholder="Search" className="p-2 border rounded" />
        </div>
        <div>
          {/* Monthly Reports button or another action */}
          <button className="bg-purple-600 text-white px-3 py-2 rounded">Monthly Reports</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-black">
          <thead>
            <tr className="w-full h-16 border-gray-300 text-black  border-b py-8">
              <th className="text-left pl-4">Title</th>
              <th className="text-left pl-4">Department</th>
              <th className="text-left pl-4">Project Manager</th>
              <th className="text-left pl-4">Actual Budget</th>
              <th className="text-left pl-4">Expenditure</th>
              {/* Add other headers as necessary */}
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="h-14 border-gray-300 border-b text-black">
                <td className="pl-4">{project.title}</td>
                <td className="pl-4">{project.department}</td>
                <td className="pl-4">
                  <img src={project.manager} alt="Manager" className="h-8 w-8 rounded-full" />
                </td>
                <td className="pl-4 text-black">{project.budget}</td>
                <td className="pl-4 text-black">{project.expenditure}</td>
                {/* Add other project details */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination controls */}
      <div className="flex justify-between items-center pt-4">
        <div>
          {/* Pagination might be more complex based on the data structure */}
          <span className="text-sm text-black">Showing 1 to 3 of 3 entries</span>
        </div>
        <div>
          <button className="text-sm text-black">Previous</button>
          <button className="text-sm ml-2 text-black">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectReportsComponent;
