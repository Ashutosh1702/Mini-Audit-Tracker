import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useObservations } from '../context/ObservationContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusChart = () => {
  const { observations } = useObservations();

  const statusCounts = observations.reduce((acc, obs) => {
    acc[obs.status] = (acc[obs.status] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: ['Open', 'In Progress', 'Closed'],
    datasets: [
      {
        data: [
          statusCounts['Open'] || 0,
          statusCounts['In Progress'] || 0,
          statusCounts['Closed'] || 0,
        ],
        backgroundColor: [
          'rgba(255, 99, 99, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 99, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Observation Status Distribution',
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Pie data={data} options={options} />
    </div>
  );
};

export default StatusChart; 