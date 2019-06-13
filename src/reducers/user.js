import { AUTH_USER_SET } from 'actions';

const INITIAL_STATE = {
  authUser: null,
};

function userReducer(state = INITIAL_STATE, {
  type,
  resource,
}) {
  switch (type) {
    case AUTH_USER_SET: {
      return {
        ...state,
        authUser: resource,
      }
    }
    default:
      return state;
  }
}

export default userReducer;