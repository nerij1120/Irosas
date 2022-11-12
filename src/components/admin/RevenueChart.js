import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    }
  },
};

const labels = [
  "24/10",
  "25/10",
  "26/10",
  "27/10",
  "28/10",
  "29/10",
  "30/10"
];

export const data = {
  labels,
  datasets: [
    {
      label: "Doanh thu (nghìn đồng)",
      data: [1750, 3990, 4350, 2998, 3249, 3555, 779],
      backgroundColor: 'red',
      
    }
  ],
};


const RevenueChart = () => {
  return (
    <div className='d-flex m-auto w-75' style={{ alignItems: "center"}}>
      <Bar options={options} data={data}/>

    </div>
  )
}

export default RevenueChart