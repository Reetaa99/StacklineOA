import "./App.css";
import Chart from "./Components/Chart/Chart";
import GeneralInfo from "./Components/GeneralInfo/GeneralInfo";
import Graph from "./Components/Graph/Graph";
import TopBar from "../src/Components/TopBar/TopBar";
import { useEffect } from "react";
import axios from "axios";
import { updateData } from "./Redux/action";
import store from "./Redux/store";

function App() {
  useEffect(() => {
    const getDataFromJson = async () => {
      const allData = await axios.get(
        "stackline_frontend_assessment_data_2021.json"
      );
      store.dispatch(updateData(allData.data[0]));
    };
    getDataFromJson();
  }, []);

  return (
    <div className="App">
      <TopBar />
      <div className="content">
        <GeneralInfo />
        <div className="graphchartContainer">
          <Graph />
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default App;
