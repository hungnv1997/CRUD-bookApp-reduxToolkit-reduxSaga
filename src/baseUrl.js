import axios from "axios";
// import React from "react";

export const client = axios.create({
  baseURL: "http://localhost:3004/",
});
