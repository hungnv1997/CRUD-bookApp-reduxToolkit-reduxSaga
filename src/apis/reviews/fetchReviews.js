import { client } from "../../baseUrl";

export const fetchReviews = () => {
  return client
    .get("/reviews/")
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
