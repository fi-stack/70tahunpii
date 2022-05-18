import Api from "../../../api/Api";

const storeTeam = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/teams", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getTeam = (id) => (dispatch) => {
  Api.get(`/teams/${id}`)
    .then((res) => {
      dispatch({ type: "GET_TEAM", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const destroyTeam = (teamId, userId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Api.post(`/teams/${teamId}/user/${userId}/destroy`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const destroyMemberTeam = (teamId, userId, memberId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Api.post(`/teams/${teamId}/user/${userId}/member/${memberId}/destroy`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const leaveTeam = (teamId, userId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Api.post(`/teams/${teamId}/user/${userId}/leave`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getListTeamsByType =
  (type, search = "", page = "") =>
  (dispatch) => {
    Api.get(`/teams/type/${type}?search=${search}&page=${page}`)
      .then((res) => {
        dispatch({
          type: "GET_LIST_TEAMS_BY_TYPE",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

export {
  storeTeam,
  getTeam,
  destroyTeam,
  destroyMemberTeam,
  leaveTeam,
  getListTeamsByType,
};
