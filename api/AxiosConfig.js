import Axios from "axios";

const axiosConfiguration = apiName => {
  const axiosConfig = {
    baseURL: `http://localhost:3000/api/${apiName}`
  };

  const axios = Axios.create(axiosConfig);

  return axios;
};

export default axiosConfiguration;
