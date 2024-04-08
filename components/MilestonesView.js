import React from 'react';

const MilestonesFeedbackComponent = () => {
  // Placeholder data for projects and milestones
  const projects = [
    { id: 1, name: 'Administration and planning' },
    { id: 2, name: 'Administration and planning' },
    { id: 3, name: 'Administration and planning' },
    { id: 4, name: 'Administration and planning' },

    // ... more projects
  ];

  const milestones = [
    { id: 1, name: 'Test Milestone', dueDate: '30-04-2021', allTasks: 1, completed: 1, status: 'Not Achieved' },
    // ... more milestones
  ];

  return (
    <div className="container mx-auto my-6 p-6 bg-white shadow-lg">
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        {/* Projects Section */}
        <div className="flex-1 bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Projects</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full h-16  text-black border-gray-300 border-b py-8">
                  <th className="text-left pl-4">Project/Programme</th>
                  {/* Add other headers as necessary */}
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="h-14 text-black border-gray-300 border-b">
                    <td className="pl-4">{project.name}</td>
                    {/* Add other project details */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="flex-1 bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Milestones</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full h-16  text-black border-gray-300 border-b py-8">
                  <th className="text-left pl-4">Milestone Name</th>
                  <th className="text-left pl-4">Due Date</th>
                  <th className="text-left pl-4">All Tasks</th>
                  <th className="text-left pl-4">Completed</th>
                  <th className="text-left pl-4">Not Completed</th>
                  <th className="text-left pl-4">Status</th>
                  {/* Add other headers as necessary */}
                </tr>
              </thead>
              <tbody>
                {milestones.map((milestone) => (
                  <tr key={milestone.id} className="h-14  text-black border-gray-300 border-b">
                    <td className="pl-4">{milestone.name}</td>
                    <td className="pl-4">{milestone.dueDate}</td>
                    <td className="pl-4">{milestone.allTasks}</td>
                    <td className="pl-4">{milestone.completed}</td>
                    <td className="pl-4">{milestone.allTasks - milestone.completed}</td>
                    <td className="pl-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {milestone.status}
                      </span>
                    </td>
                    {/* Add other milestone details */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesFeedbackComponent;
