import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
localStorage.getItem("persist:_user") &&
JSON.parse(localStorage.getItem("persist:_user"))
  .token !== "null"
  ? (axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${
      JSON.parse(
        localStorage.getItem("persist:_user")
      ).token.split(`"`)[1]
    }`)
  : null;
// `Bearer ${
//   localStorage.getItem("persist:_user") &&
//   JSON.parse(
//     localStorage.getItem("persist:_user")
//   ).token
//     ? JSON.parse(
//         localStorage.getItem("persist:_user")
//       ).token.split(`"`)[1]
//     : null
// }`;
export default axiosInstance;
