import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Chart({sales=[]}) {
  const [tableTitles, setTableTitles] = useState([]);
  useEffect(()=> {
    if (sales) {
      const titles = []
      for (let title in sales[0]) {
        titles.push(title);
      }
      setTableTitles(titles);
    }
  },[sales])

  return (
    <table>
        <thead>
            {tableTitles.map((item) => {
                return (<th>{item}</th>)
            })}
        </thead>
        <tbody>
            {sales.map(item => {
              return (
                <tr>
                  {tableTitles.map(title => {
                    return (
                      <td>{item[title]}</td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
    </table>
  )
}
