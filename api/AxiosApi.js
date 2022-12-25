import axiosConfiguration from "./AxiosConfig";

export const axios = axiosConfiguration("/");

export const authApi = {
  auth: data => {
    console.log("calling authenticate", data);
    return axios.post("Authentication", data);
  }
};
export const registerApi = {
  register: data => {
    console.log("calling register", data);
    return axios.post("Registration", data);
  }
};

export const AlertsApi = {
  get: () => {
    return axios.get("Alerts");
  }
};
