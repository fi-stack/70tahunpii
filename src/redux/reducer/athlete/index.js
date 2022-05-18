const stateAthleteByUserId = {
  athlete_by_user_id: {},
};

const athleteByUserId = (state = stateAthleteByUserId, action) => {
  if (action.type === "GET_ATHLETE_BY_USER_ID") {
    return {
      ...state,
      athlete_by_user_id: action.payload,
    };
  }

  return state;
};

export { athleteByUserId };
