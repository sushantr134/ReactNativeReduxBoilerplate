import { CREATE_POST } from "../actions/types";

const initialState = {};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        msg: action.payload
      };

    default:
      return state;
  }
};
