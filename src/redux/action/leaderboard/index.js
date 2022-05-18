import Api from "../../../api/Api";

const getLeaderboards = (type) => (dispatch) => {
  Api.get(`/leaderboards/${type}`)
    .then((res) => {
      dispatch({
        type: "GET_LEADERBOARDS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const getAthleteActivities = (id, type) => (dispatch) => {
  Api.get(`/athlete/${id}/activities/${type}`)
    .then((res) => {
      dispatch({ type: "GET_ATHLETE_ACTIVITIES", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const getLeaderboardTeams = (type) => (dispatch) => {
  Api.get(`/leaderboards/team/${type}`)
    .then((res) => {
      dispatch({
        type: "GET_LEADERBOARD_TEAMS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export { getLeaderboards, getAthleteActivities, getLeaderboardTeams };
