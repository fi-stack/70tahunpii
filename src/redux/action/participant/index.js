import Api from "../../../api/Api";

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

export { storeParticipant, uploadPaymentProof };
