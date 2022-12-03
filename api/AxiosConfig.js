import Axios from "axios";

const axiosConfiguration = apiName => {
  const axiosConfig = {
    baseURL: `https://192.168.0.139:7212/api/Authentication${apiName}`
  };

  const axios = Axios.create(axiosConfig);

  return axios;
};

export default axiosConfiguration;
