import ActionTypes from "@/redux/ActionTypes";
import { companies } from "@/_services/mockData";

export const fetchCompanies = dispatch =>
  dispatch({ type: ActionTypes.FETCH_COMPANIES, payload: companies });
