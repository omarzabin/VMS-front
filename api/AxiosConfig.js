import Axios from "axios";

const axiosConfiguration = apiName => {
  const axiosConfig = { baseURL: `https://localhost:7212/api/${apiName}` };

  const axios = Axios.create(axiosConfig);

  return axios;
};
export default axiosConfiguration;
