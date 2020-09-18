import ActionTypes from "@/redux/ActionTypes";

const clientStates = (state, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload]
      };
    case ActionTypes.DELETE_COMPANY:
      const companyId = action.payload.id;
      const companies = state.companies.filter(
        company => company.id !== companyId
      );
      return {
        ...state,
        companies
      };
    case ActionTypes.ERROR_MESSAGE:
      return {
        ...state,
        errors: [...state.errors, action.payload]
      };
    case ActionTypes.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errors: []
      };
    default:
      return {
        ...state
      };
  }
};
export default clientStates;
