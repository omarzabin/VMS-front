import Axios from "axios";

export const axiosConfiguration = apiName => {
  const axiosConfig = {
    baseURL: `https://vms.gisjordan.com/api${apiName}`
  };

  const axios = Axios.create({
    ...axiosConfig,
    headers: {
      "Content-Type": "application/json"
    }
  });

  return axios;
};

export default axiosConfiguration;
