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

export { getParticipantsByUserId, storeParticipant, uploadPaymentProof };
