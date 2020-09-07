import { combineReducers } from "redux";
import adminStates from "@/redux/reducers/adminReducers";
import clientStates from "@/redux/reducers/clientCompanyReducers";

const reducers = combineReducers({ adminStates, clientStates });

export default reducers;
