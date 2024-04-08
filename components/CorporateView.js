// components/CorporateView.js
import React from 'react';

const CorporateView = () => {
  return (
    <div className="container mx-auto p-6 bg-white mt-4  rounded shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Corporate View</h2>
      
      {/* Tabs */}
      <div className="flex mt-4 mb-2 space-x-8 gap-4  border-b">
        <button className="pb-2 font-medium text-blue-600 border-b-2 border-blue-600 focus:outline-none">CIDP</button>
        <button className="pb-2 font-medium text-gray-500 hover:text-blue-600 focus:outline-none">ADP</button>
        <button className="pb-2 font-medium text-gray-500 hover:text-blue-600 focus:outline-none">Projects With Approved Budget</button>
        <button className="pb-2 font-medium text-gray-500 hover:text-blue-600 focus:outline-none">Procurement Plan</button>
      </div>

      {/* Table */}
      <div className="mt-2">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="text-gray-600 bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left">TITLE</th>
                <th className="py-3 px-6 text-left">DEPARTMENT</th>
                <th className="py-3 px-6 text-center">STATUS</th>
                <th className="py-3 px-6 text-center">PROGRESS</th>
                <th className="py-3 px-6 text-right">ESTIMATED BUDGET</th>
                <th className="py-3 px-6 text-right">ACTUAL BUDGET</th>
                <th className="py-3 px-6 text-right">EXPENDITURE</th>
                <th className="py-3 px-6 text-center">DURATION</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* Rows */}
              <tr className="border-b">
                <td className="py-3 px-6 text-left">Sample 1</td>
                <td className="py-3 px-6 text-left">Administration</td>
                <td className="py-3 px-6 text-center">Not Started</td>
                {/* ... other cells ... */}
              </tr>
              <tr className="border-b">
                <td className="py-3 px-6 text-left">Sample 1</td>
                <td className="py-3 px-6 text-left">Administration</td>
                <td className="py-3 px-6 text-center">Not Started</td>
                {/* ... other cells ... */}
              </tr>
              {/* ... other rows ... */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination and Action Button */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center">
          <span>Showing 1 to 2 of 2 entries</span>
        </div>
        <div className="flex items-center">
          <button className="h-10 px-5 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none">
            Upload Procurement Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorporateView;
