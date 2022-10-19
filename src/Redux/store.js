import { legacy_createStore as createStore } from "redux";
import mainReducer from "./main_reducer";

export default createStore(mainReducer);
