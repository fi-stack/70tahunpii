import Api from "../../../api/Api";

const storeRegister = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/register", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const storeLogin = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/login", form)
      .then((res) => {
        resolve(res.data);
        localStorage.setItem("user-token", res.data.data.token);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getUser = () => (dispatch) => {
  const userToken = localStorage.getItem("user-token");
  Api.get("/get-user", {
    headers: {
      Authorization: `bearer ${userToken}`,
    },
  })
    .then((res) => {
      dispatch({ type: "GET_USER", payload: res.data.data });
    })
    .catch((err) => {
      if (err.response) {
        localStorage.removeItem("user-token");
        window.location.reload();
      }
    });
};

const getUserDetail = (id) => (dispatch) => {
  Api.get(`/user/${id}`)
    .then((res) => {
      dispatch({ type: "GET_USER_DETAIL", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const updateProfile = (form, id) => {
  return new Promise((resolve, reject) => {
    Api.post(`/user/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const connectStrava = (id) => (dispatch) => {
  window.location.replace(
    `https://70tahunpii-api.portalsepeda.com/public/api/v2/connect-strava/user/${id}`
  );
};

const disconnectStrava = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Api.get(`/strava/disconnect/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export {
  storeRegister,
  storeLogin,
  getUser,
  getUserDetail,
  updateProfile,
  connectStrava,
  disconnectStrava,
};
