import * as types from './actionTypes';
import staticUser from './staticUser';

const initialFormState = {
  formValue: '',
};
export function formReducer(state = initialFormState, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
}

const intialUser = staticUser;
export function stockReducer(state = intialUser, action) {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}