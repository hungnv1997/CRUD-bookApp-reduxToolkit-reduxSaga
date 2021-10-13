// import axios from "axios";
import { client } from "../../baseUrl";
// import { API_URL } from "../../const";

export function fetchBook() {
  return client
    .get("/books/")
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
