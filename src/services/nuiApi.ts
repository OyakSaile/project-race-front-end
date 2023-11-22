import axios from "axios";

export const nuiApi = axios.create({
  baseURL: "http://race/",
});
