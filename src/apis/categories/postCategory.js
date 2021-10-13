// import axios from "axios";
// import { API_URL } from "../../const";

import { client } from "../../baseUrl";

export function postCategory(data) {
  // return axios
  //   .post(API_URL + "categories", data)
  //   .then(function (response) {
  //     return response;
  //   })
  //   .catch(function (error) {
  //     return error;
  //   });
  return client
    .post("/categories/", data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
