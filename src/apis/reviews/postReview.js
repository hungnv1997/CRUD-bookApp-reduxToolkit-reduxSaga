import { client } from "../../baseUrl";

export const postReview = (data) => {
  return client
    .post("/reviews/", data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
