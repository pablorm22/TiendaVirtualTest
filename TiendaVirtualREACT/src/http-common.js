import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:44347/api", 
  headers: {
    "Content-type": "application/json"
  }
});