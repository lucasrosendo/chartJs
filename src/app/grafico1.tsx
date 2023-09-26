"use client"
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
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    y: {
      min:0,
      max: 100,
    }
  },
  borderColor: 'rgba(0,0,0,1)',
  borderWidth: 3,  
  
};

const labels = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: 'rgba(53, 162, 235, 1)',
    },
  ],
};

export function Grafico1() {
  return <Bar className='w-10 h-10 m-2 p-4' options={options} data={data} />;
}
