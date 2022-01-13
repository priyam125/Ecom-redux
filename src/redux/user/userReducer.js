import { SET_CURRENT_USER } from "./userActions";

export const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      const { currentUser } = action.payload;
      return {
        ...state,
        currentUser: currentUser,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
