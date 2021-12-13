import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_IS_AUTHENTICATED
} from '../actions/types';

const initialState = {
  address:null,
  isAuthenticated: null,
  userInfo: null,
  loading: true,
  user: null
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        address: payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        address: null,
        isAuthenticated: false,
        loading: false
      };
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
        userInfo: payload
      };
    default:
      return state;
  }
}

export default authReducer;
