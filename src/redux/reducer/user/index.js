const stateUser = {
  user: {},
};

const stateUserDetail = {
  user_detail: {},
};

const user = (state = stateUser, action) => {
  if (action.type === "GET_USER") {
    return {
      ...state,
      user: action.payload,
    };
  }

  return state;
};

const userDetail = (state = stateUserDetail, action) => {
  if (action.type === "GET_USER_DETAIL") {
    return {
      ...state,
      user_detail: action.payload,
    };
  }

  return state;
};

export { user, userDetail };
