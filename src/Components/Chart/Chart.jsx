import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Chart.css";
const dollarFormatter = (money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return formatter.format(money);
};

const moment = require("moment");
const dateFormatter = (date) => {
  return moment(date).format("MM-DD-YY");
};

const determineTextStyles = (title, data) => {
  switch (title) {
    case "weekEnding":
      return dateFormatter(data);
    case "unitsSold":
      return data;
    default:
      return dollarFormatter(data);
  }
};

export default function Chart({ sales = [] }) {
  const [tableTitles, setTableTitles] = useState([]);
  useEffect(() => {
    if (sales) {
      const titles = [];
      for (let title in sales[0]) {
        titles.push(title);
      }
      setTableTitles(titles);
    }
  }, [sales]);

  return (
    <table className="chartBackground">
      <thead>
        {tableTitles.map((item) => {
          return <th>{item}</th>;
        })}
      </thead>
      <tbody>
        {sales.map((item) => {
          return (
            <tr className="rowStyles">
              {tableTitles.map((title) => {
                return (
                  <td className="tdStyles">
                    {determineTextStyles(title, item[title])}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
