import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-a2340-default-rtdb.firebaseio.com",
});

export default instance;
