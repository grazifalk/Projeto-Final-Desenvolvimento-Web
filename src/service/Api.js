import axios from "axios";

const Api = axios.create({
    baseURL: "https://testandoserratec.herokuapp.com/",
  });

export default Api;