import React from 'react';

const ProjectsComponent = () => {
  // This array would be replaced by your actual projects data
  const projects = [
    {
      id: 1,
      name: 'Administration and Planning',
      description: 'Office refurbishment',
      performanceIndicator: 'No. of offices refurbished',
      manager: 'Jane Doe',
      team: 'Team A',
      financialYear: '2020-2021',
      status: 'In Progress'
      // Add other project details as necessary
    },
    {
        id: 2,
        name: 'Administration and Planning',
        description: 'Office refurbishment',
        performanceIndicator: 'No. of offices refurbished',
        manager: 'Jane Doe',
        team: 'Team A',
        financialYear: '2020-2021',
        status: 'In Progress'
        // Add other project details as necessary
      },
      {
        id: 3,
        name: 'Administration and Planning',
        description: 'Office refurbishment',
        performanceIndicator: 'No. of offices refurbished',
        manager: 'Jane Doe',
        team: 'Team A',
        financialYear: '2020-2021',
        status: 'In Progress'
        // Add other project details as necessary
      },
    // ... more projects
  ];

  return (
    <div className="container mx-auto my-6 p-6 bg-white shadow-lg">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
        <div>
          <button className="bg-blue-500 text-gray-800 px-3 py-1 rounded mr-2">Add Project</button>
          <button className="bg-green-500 text-gray-800 px-3 py-1 rounded">Bulk Upload</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full h-16 border-gray-300 border-b py-8">
              <th className="text-left text-gray-800 pl-4">Project Name</th>
              <th className="text-left  text-gray-800 pl-4">Description</th>
              <th className="text-left  text-gray-800 pl-4">Performance Indicator</th>
              <th className="text-left  text-gray-800 pl-4">Manager</th>
              <th className="text-left  text-gray-800 pl-4">Team</th>
              <th className="text-left text-gray-800 pl-4">Financial Year</th>
              <th className="text-left text-gray-800 pl-4">Status</th>
              <th className="text-left  text-gray-800pl-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="h-14 text-gray-800  border-gray-300 border-b">
                <td className="pl-4">{project.name}</td>
                <td className="pl-4">{project.description}</td>
                <td className="pl-4">{project.performanceIndicator}</td>
                <td className="pl-4">{project.manager}</td>
                <td className="pl-4">{project.team}</td>
                <td className="pl-4">{project.financialYear}</td>
                <td className="pl-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                    {project.status}
                  </span>
                </td>
                <td className="pl-4">
                  {/* Add buttons or icons for actions */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsComponent;
