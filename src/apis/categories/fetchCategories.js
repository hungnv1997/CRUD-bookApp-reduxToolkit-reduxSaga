import axios from "axios";
import { API_URL } from "../../const";

export function fetchCategories() {
  return axios.request({
    method: "get",
    url: API_URL + "categories",
  });
}
