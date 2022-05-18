import axios from "axios";

const Api = axios.create({
  // baseURL: "http://localhost/70tahunpii-service/public/api/v2",
  baseURL: "https://70tahunpii-api.portalsepeda.com/public/api/v2",
});

export default Api;
