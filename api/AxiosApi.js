import axiosConfiguration from "./AxiosConfig";

const axios = axiosConfiguration("/");

export const authApi = {
  auth: async data => {
    await axios.post(`/Authentication`, data);
  }
};
