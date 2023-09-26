import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
    dash: [50, 50],
  },
};

const labels = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '08:00', '09:00', '10:00'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: 'rgb(153, 162, 35)',
      backgroundColor: 'rgba(153, 162, 35, 0.5)',
    },
    {
      fill: true,
      label: 'Dataset 3',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: 'rgb(3, 16, 235)',
      backgroundColor: 'rgba(3, 16, 235, 0.5)',
    },
  ],
};

export function Grafico3() {
  return <Line className='w-10 h-10 m-2 p-4' options={options} data={data} />;
}