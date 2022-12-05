import axios from "axios";

import Axios from "axios";

const axiosConfiguration = apiName => {
  const axiosConfig = {
    baseURL: `https://192.168.0.139:7212/api${apiName}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };

  const axios = Axios.create(axiosConfig);

  return axios;
};

export default axiosConfiguration;
