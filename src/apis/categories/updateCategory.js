// import axios from "axios";
// import { API_URL } from "../../const";

import { client } from "../../baseUrl";

export const updateCategory = (data) => {
  // console.log(">>>>>>>>>>Data", data);
  // return axios
  //   .put(API_URL + "categories/" + data.id, data)
  //   .then(function (response) {
  //     return response;
  //   })
  //   .catch(function (error) {
  //     return error;
  //   });
  return client
    .put("/categories/" + data.id, data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
