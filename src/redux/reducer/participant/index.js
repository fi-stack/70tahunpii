const stateParticipantsByUserId = {
  participants_by_user_id: [],
};

const participantsByUserId = (state = stateParticipantsByUserId, action) => {
  if (action.type === "GET_PARTICIPANTS_BY_USER_ID") {
    return {
      ...state,
      participants_by_user_id: action.payload,
    };
  }

  return state;
};

export { participantsByUserId };
