import ActionTypes from "@/redux/ActionTypes";

const adminStates = (state, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMPANIES:
      return {
        ...state,
        companies: action.payload
      };
    case ActionTypes.FETCHING_API:
      return {
        ...state,
        apiFetching: !state.apiFetching
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

export default adminStates;
