import axios from "axios";

export const API_KEY:string = "1631d6a42c044c5e82d81ee63605ab1b";
const BASE_URL:string = "https://newsapi.org/v2/";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});