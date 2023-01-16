import axiosConfiguration from "./AxiosConfig";

export const axios = axiosConfiguration("/");

export const authApi = {
  auth: data => {
    console.log("calling authenticate", data);
    return axios.post("Authentication", data);
  },
  getDeviseIMEI: data => {
    console.log("calling getDeviseIMEI", data.ownerId);
    return axios.get(`VehicleOwner/getDeviceIMEI?ownerId=${data.ownerId}`);
  }
};
export const registerApi = {
  register: data => {
    console.log("calling register", data);
    return axios.post("Registration", data);
  }
};

export const AlertsApi = {
  get: IMEI => {
    return axios.get(`Alerts?IMEI=${IMEI}`);
  },
  getLatest: IMEI => {
    return axios.get(`Alerts/latest/?IMEI=${IMEI}`);
  }
};
export const updateOwnerApi = {
  updateAll: data => {
    console.log("calling update", data);
    return axios.put(`VehicleOwner/${data.ownerId}`, data);
  },
  updateVehicleId: (ownerId, vehicleId) => {
    console.log("calling update", ownerId, vehicleId);
    return axios.put(
      `VehicleOwner?ownerId=${ownerId}&vehicleId=${vehicleId}`,
      ownerId,
      vehicleId
    );
  }
};
export const addVehicle = {
  addVehicle: data => {
    console.log("calling addVehicle", data);
    return axios.post(`Vehicle`, data);
  },
  addRegistration: data => {
    console.log("calling addRegistration", data);
    return axios.post(`VehicleRegistration`, data);
  },
  addInsurance: data => {
    console.log("calling addInsurance", data);
    return axios.post(`Insurance`, data);
  }
};
