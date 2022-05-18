const stateLeaderboards = {
  leaderboards: [],
};

const stateAthleteActivities = {
  athlete_activities: [],
};

const stateLeaderboardTeams = {
  leaderboard_teams: [],
};

const leaderboards = (state = stateLeaderboards, action) => {
  if (action.type === "GET_LEADERBOARDS") {
    return {
      ...state,
      leaderboards: action.payload,
    };
  }

  return state;
};

const athleteActivities = (state = stateAthleteActivities, action) => {
  if (action.type === "GET_ATHLETE_ACTIVITIES") {
    return {
      ...state,
      athlete_activities: action.payload,
    };
  }

  return state;
};

const leaderboardTeams = (state = stateLeaderboardTeams, action) => {
  if (action.type === "GET_LEADERBOARD_TEAMS") {
    return {
      ...state,
      leaderboard_teams: action.payload,
    };
  }

  return state;
};

export { leaderboards, athleteActivities, leaderboardTeams };
