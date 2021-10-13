// import axios from "axios";
import { client } from "../../baseUrl";
// import { API_URL } from "../../const";

export function deleteCategory(data) {
  console.log(">>>>>>>>>>>Delete");
  // return axios
  //   .delete(API_URL + "categories/" + data)
  //   .then(function (response) {
  //     return response;
  //   })
  //   .catch(function (error) {
  //     return error;
  //   });
  return client
    .delete("/categories/" + data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
