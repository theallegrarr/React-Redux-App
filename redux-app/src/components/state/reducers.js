import * as types from './actionTypes';
import { user } from './staticUser';

const initialFormState = {
  value: '',
};
export function formReducer(state = initialFormState, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}

const intialUser = user;
export function userReducer(state = intialUser, action) {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}