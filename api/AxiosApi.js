import axiosConfiguration from "./AxiosConfig";

const axios = axiosConfiguration("/");

export const authApi = {
  auth: data => {
    console.log("calling authenticate", data);
    return axios.post("Authentication", data);
    //return axios.get(`test`);
  },

  withCredentials: true
};
