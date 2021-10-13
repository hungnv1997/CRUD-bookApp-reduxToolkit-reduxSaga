import { client } from "../../baseUrl";

export const updateReview = (data) => {
  return client
    .put("/reviews/" + data.id, data)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
