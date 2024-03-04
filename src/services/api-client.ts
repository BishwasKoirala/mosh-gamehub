import axios from "axios";

export default axios.create({
  baseURL : "https://api.rawg.io/api",
  params : {
    key : '40744d251f8f4bf99ac3c17aa810279c'
  }
})