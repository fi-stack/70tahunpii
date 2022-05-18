import Api from "../../../api/Api";

const getAthleteByUserId = (id) => (dispatch) => {
  Api.get(`/athletes/user/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_ATHLETE_BY_USER_ID",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export { getAthleteByUserId };
