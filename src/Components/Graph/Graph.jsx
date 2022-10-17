import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import "chartjs-adapter-date-fns";
import { enGB } from "date-fns/locale";
import { useEffect } from "react";
import { useState } from "react";
import "./Graph.css";
ChartJS.register(...registerables);

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
      min: -500000,
      max: 1500000,
    },
    x: {
      adapters: {
        date: { locale: enGB },
      },
      type: "time",
      min: "2017-01-01",
      ticks: {
        source: labels,
      },
      time: {
        unit: "month",
        displayFormats: {
          month: "MMM",
        },
      },
    },
  },
};

export default function Graph({ sales }) {
  const [data, setData] = useState({
    labels,
    datasets: [
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
    <div className="graphBackground">
      <Line data={data} options={options} />
    </div>
  );
}
