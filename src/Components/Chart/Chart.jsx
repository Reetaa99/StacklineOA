import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import store from "../../Redux/store";
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

const titleFormatter = (title) => {
  title = title[0].toUpperCase() + title.substring(1);
  return title
    .match(/[A-Z][a-z]+/g)
    .map((item) => item.toUpperCase())
    .join(" ");
};

export default function Chart() {
  const [tableTitles, setTableTitles] = useState([]);
  const { sales = [] } = store.getState();
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
        <tr>
          {tableTitles.map((item, itemIndex) => {
            return <th key={`column-${itemIndex}`}>{titleFormatter(item)}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {sales.map((item, index) => {
          return (
            <tr className="rowStyles" key={`row-${index}`}>
              {tableTitles.map((title, i) => {
                return (
                  <td className="tdStyles" key={`${title}-${i}`}>
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
