import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Section 1</h2>
            <p>This is a description for section 1.</p>
          </div>
          
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Section 2</h2>
            <p>This is a description for section 2.</p>
          </div>
          
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Section 3</h2>
            <p>This is a description for section 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
