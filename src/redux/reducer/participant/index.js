const stateParticipantDetails = {
  participant_details: [],
};

const stateParticipantsByUserId = {
  participants_by_user_id: [],
};

const stateParticipantDetailsByUserId = {
  participant_details_by_user_id: [],
};

const stateListParticipantDetailsByType = {
  list_participant_details_by_type: {},
};

const participantDetails = (state = stateParticipantDetails, action) => {
  if (action.type === "GET_PARTICIPANT_DETAILS") {
    return {
      ...state,
      participant_details: action.payload,
    };
  }

  return state;
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

const participantDetailsByUserId = (
  state = stateParticipantDetailsByUserId,
  action
) => {
  if (action.type === "GET_PARTICIPANT_DETAILS_BY_USER_ID") {
    return {
      ...state,
      participant_details_by_user_id: action.payload,
    };
  }

  return state;
};

const listParticipantDetailsByType = (
  state = stateListParticipantDetailsByType,
  action
) => {
  if (action.type === "GET_LIST_PARTICIPANT_DETAILS_BY_TYPE") {
    return {
      ...state,
      list_participant_details_by_type: action.payload,
    };
  }

  return state;
};

export {
  participantDetails,
  participantsByUserId,
  participantDetailsByUserId,
  listParticipantDetailsByType,
};
