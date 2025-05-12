import React from 'react';
import { Link } from 'react-router-dom';
import StatusChart from '../StatusChart';
import ObservationList from '../ObservationList';

const StatCard = ({ title, value, change, icon, color }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <span className={`material-icons ${color}`}>{icon}</span>
    </div>
    <p className="text-3xl font-bold mt-2">{value}</p>
    <p className="text-sm text-gray-500 mt-1">{change}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Observations"
          value="24"
          change="+2 from last week"
          icon="assignment"
          color="text-blue-600"
        />
        <StatCard
          title="Open Issues"
          value="8"
          change="-1 from last week"
          icon="error"
          color="text-red-600"
        />
        <StatCard
          title="In Progress"
          value="12"
          change="+3 from last week"
          icon="pending"
          color="text-yellow-600"
        />
        <StatCard
          title="Completed"
          value="4"
          change="+1 from last week"
          icon="check_circle"
          color="text-green-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
          <h3 className="text-lg font-semibold mb-4">Status Overview</h3>
          <StatusChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Observations</h3>
            <Link 
              to="/observations" 
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              View All
            </Link>
          </div>
          <ObservationList limit={5} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 