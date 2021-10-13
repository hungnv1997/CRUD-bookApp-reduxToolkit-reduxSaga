import { client } from "../../baseUrl";

export const deleteReview = (data) => {
  return client
    .delete("/reviews/" + data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
