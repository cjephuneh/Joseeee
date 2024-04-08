import React from 'react';
import { DocumentDownloadIcon } from '@heroicons/react/outline';

const ResourceCenterComponent = () => {
  // Placeholder data for files
  const files = [
    {
      id: 1,
      name: '2018-2022 CIDP',
      type: 'application/pdf',
      size: '6.20 MB',
      uploadDate: 'June 14, 2021',
      downloadLink: '/path-to-your-file.pdf', // Replace with actual file path
    },
    // ... more files
  ];

  return (
    <div className="container mx-auto my-6 p-6 bg-white shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Resource Center</h2>
      <div className="mb-4 flex justify-between items-center">
        <div>
          {/* Search input */}
          <input type="text" placeholder="Search" className="p-2 border rounded" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full h-16 border-gray-300 border-b text-black py-8">
              <th className="text-left pl-4">File Name</th>
              <th className="text-left pl-4">File Type</th>
              <th className="text-left pl-4">File Size</th>
              <th className="text-left pl-4">Date Uploaded</th>
              <th className="text-left pl-4">Preview/Download</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id} className="h-14 border-gray-300 border-b text-black">
                <td className="pl-4">{file.name}</td>
                <td className="pl-4">{file.type}</td>
                <td className="pl-4">{file.size}</td>
                <td className="pl-4">{file.uploadDate}</td>
                <td className="pl-4">
                  <a href={file.downloadLink} download className="flex items-center text-blue-600 hover:text-blue-800 visited:text-purple-600">
                    <DocumentDownloadIcon className="h-5 w-5" />
                    <span className="ml-2">Download</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination controls (if necessary) */}
      <div className="flex justify-between items-center pt-4 text-black">
        <div>
          <span className="text-sm">Showing 1 to {files.length} of {files.length} entries</span>
        </div>
        <div>
          <button className="text-sm">Previous</button>
          <button className="text-sm ml-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCenterComponent;
