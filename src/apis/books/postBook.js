import { client } from "../../baseUrl";
// import axios from "axios";
// import { API_URL } from "../../const";

export function postBook(data) {
  return client
    .post("/books", data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
