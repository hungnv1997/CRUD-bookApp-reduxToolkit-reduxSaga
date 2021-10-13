// import axios from "axios";
import { client } from "../../baseUrl";
// import { API_URL } from "../../const";

export function deleteBook(data) {
  console.log(">>>>>>>>>>>Delete");

  return client
    .delete("/books/" + data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
