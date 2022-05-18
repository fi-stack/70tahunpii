import Api from "../../../api/Api";

const getProvinces = () => (dispatch) => {
  Api.get("/provinces")
    .then((res) => {
      dispatch({ type: "GET_PROVINCES", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const getCities = (id) => (dispatch) => {
  Api.get(`/cities?province_code=${id}`)
    .then((res) => {
      dispatch({ type: "GET_CITIES", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const getDistricts = (id) => (dispatch) => {
  Api.get(`/districts?city_code=${id}`)
    .then((res) => {
      dispatch({ type: "GET_DISTRICTS", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const getVillages = (id) => (dispatch) => {
  Api.get(`/villages?district_code=${id}`)
    .then((res) => {
      dispatch({ type: "GET_VILLAGES", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const getCitiesBySearch = (search) => (dispatch) => {
  Api.get(`/cities?search=${search}`)
    .then((res) => {
      dispatch({ type: "GET_CITIES_BY_SEARCH", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export {
  getProvinces,
  getCities,
  getDistricts,
  getVillages,
  getCitiesBySearch,
};
