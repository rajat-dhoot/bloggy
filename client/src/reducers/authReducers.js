import { SET_CURRENT_USER, TOGGLE_USER_LOADING } from "../actions/types";
const isEmpty = require("is-empty");

const initialState = {
   isAuthenticated: false,
   user: {},
   userLoading: false
};

export default function(state = initialState, action) {
   switch (action.type) {
      case SET_CURRENT_USER:
         return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
         };
      case TOGGLE_USER_LOADING:
         return {
            ...state,
            userLoading: !state.userLoading
         };
      default:
         return state;
   }
}
