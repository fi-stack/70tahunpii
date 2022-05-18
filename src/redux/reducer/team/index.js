const stateTeam = {
  team: {},
};

const stateListTeamsByType = {
  list_teams_by_type: {},
};

const team = (state = stateTeam, action) => {
  if (action.type === "GET_TEAM") {
    return {
      ...state,
      team: action.payload,
    };
  }

  return state;
};

const listTeamsByType = (state = stateListTeamsByType, action) => {
  if (action.type === "GET_LIST_TEAMS_BY_TYPE") {
    return {
      ...state,
      list_teams_by_type: action.payload,
    };
  }

  return state;
};

export { team, listTeamsByType };
