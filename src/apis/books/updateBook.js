// import axios from "axios";
import { client } from "../../baseUrl";
// import { API_URL, BOOKS_URL } from "../../const";

export function updateBook(data) {
  // console.log(">>>>>>>>>>Data", data);
  // return axios
  //   .put(API_URL + "books/" + data.id, data)
  //   .then(function (response) {
  //     return response;
  //   })
  //   .catch(function (error) {
  //     return error;
  //   });
  return client
    .put("/books/" + data.id, data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
