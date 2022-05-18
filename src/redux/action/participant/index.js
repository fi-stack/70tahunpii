import Api from "../../../api/Api";

const getParticipantsByUserId = (id) => (dispatch) => {
  Api.get(`/participants/user/${id}`)
    .then((res) => {
      dispatch({ type: "GET_PARTICIPANTS_BY_USER_ID", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const getParticipantDetails =
  (type, search = "") =>
  (dispatch) => {
    Api.get(`/participant-details?type=${type}&search=${search}`)
      .then((res) => {
        dispatch({ type: "GET_PARTICIPANT_DETAILS", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

const getParticipantDetailsByUserId = (id) => (dispatch) => {
  Api.get(`/participant-details/user/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_PARTICIPANT_DETAILS_BY_USER_ID",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const storeParticipant = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/participants", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const updateTeamIdParticipantDetail = (id, teamId) => {
  return new Promise((resolve, reject) => {
    Api.post(`/participant-details/update/${id}/team/${teamId}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const uploadPaymentProof = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/participants/upload-payment-proof", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getListParticipantDetailsByType =
  (type, search = "", page = "") =>
  (dispatch) => {
    Api.get(`/participant-details/type/${type}?search=${search}&page=${page}`)
      .then((res) => {
        dispatch({
          type: "GET_LIST_PARTICIPANT_DETAILS_BY_TYPE",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

export {
  getParticipantsByUserId,
  getParticipantDetails,
  getParticipantDetailsByUserId,
  storeParticipant,
  uploadPaymentProof,
  updateTeamIdParticipantDetail,
  getListParticipantDetailsByType,
};
