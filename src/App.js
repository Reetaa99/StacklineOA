import logo from "./logo.svg";
import "./App.css";
import Chart from "../src/Components/Chart";
import GeneralInfo from "./Components/GeneralInfo/GeneralInfo";
import Graph from "../src/Components/Graph";
import TopBar from "../src/Components/TopBar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getDataFromJson = async () => {
      const allData = await axios.get(
        "stackline_frontend_assessment_data_2021.json"
      );
      console.log("all daat", allData);
      setData(allData.data[0]);
    };
    getDataFromJson();
  }, []);

  return (
    <div className="App">
      <TopBar />
      <div className="content">
        <GeneralInfo
          title={data.title}
          subtitle={data.subtitle}
          image={data.image}
          tags={data.tags}
        />
        <div>
          <Graph sales={data.sales} />
          <Chart sales={data.sales} />
        </div>
      </div>
    </div>
  );
}

export default App;
