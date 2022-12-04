import Axios from "axios";

const axiosConfiguration = apiName => {
  const axiosConfig = {
    baseURL: `http://192.168.0.139:5212/api${apiName}`
  };

  const axios = Axios.create(axiosConfig);

  return axios;
};

export default axiosConfiguration;
