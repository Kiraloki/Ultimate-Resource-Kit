import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartdata } from "./data/chartdata";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  plugins: {
    title: {
      display: true,
      text: "Contributions Overtime",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65];

export const data = {
  labels,
  datasets: [
    {
      label: "Employer  : K 73,500",
      data: chartdata.employer,
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Employee : K 52,500",
      data: chartdata.employee,
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Total Interset : K 244,313",
      data: chartdata.intrest,
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

function Charts() {
  return <Bar options={options} data={data} />;
}

export default Charts;
