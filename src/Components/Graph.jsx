import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import "chartjs-adapter-date-fns";
import { enGB } from "date-fns/locale";
import { useEffect } from "react";
import { useState } from "react";

ChartJS.register(...registerables);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales",
    },
  },
  scales: {
    y: {
      title: { display: true, text: "$" },
    },
    x: {
      adapters: {
        date: { locale: enGB },
        type: "time",
        time: {
          unit: "month",
        },
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export default function Graph({ sales }) {
  const [data, setData] = useState({
    datasets: [
      labels,
      {
        label: "Retail Sales",
        data: [],
        fill: false,
        borderColor: "#44a7f6",
        tension: 0.3,
      },
      {
        label: "Whole Sales",
        data: [],
        fill: false,
        borderColor: "#9ea8c1",
        tension: 0.3,
      },
    ],
  });
  useEffect(() => {
    if (sales) {
      const retailSales = [];
      const wholeSales = [];
      for (let obj of sales) {
        retailSales.push({ x: obj.weekEnding, y: obj.retailSales });
        wholeSales.push({ x: obj.weekEnding, y: obj.wholesaleSales });
      }
      setData({
        ...data,
        datasets: [
          { ...data.datasets[0], data: retailSales },
          { ...data.datasets[1], data: wholeSales },
        ],
      });
    }
  }, [sales]);

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
