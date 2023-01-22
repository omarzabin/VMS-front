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

export const vehicleApi = {
  addVehicle: data => {
    console.log("calling addVehicle", data);
    return axios.post(`Vehicle`, data);
  },
  getVehicle: vehicleId => {
    console.log("calling getVehicle", vehicleId);
    return axios.get(`Vehicle/${vehicleId}`);
  },
  getDeviseIMEI: data => {
    console.log("calling getDeviseIMEI", data.ownerId);
    return axios.get(`Vehicle/getDeviceIMEI?ownerId=${data.ownerId}`);
  }
};

export const VehicleRegistrationApi = {
  addRegistration: data => {
    console.log("calling addRegistration", data);
    return axios.post(`VehicleRegistration`, data);
  },
  getRegistration: regId => {
    console.log("calling getRegistration", regId);
    return axios.get(`VehicleRegistration/${regId}`);
  }
};
export const insuranceApi = {
  addInsurance: data => {
    console.log("calling addInsurance", data);
    return axios.post(`Insurance`, data);
  },
  getInsurance: insId => {
    console.log("calling getInsurance", insId);
    return axios.get(`Insurance/${insId}`);
  }
};
export const recordsApi = {
  addRecord: data => {
    console.log("calling add record", data);
    return axios.post(`RepairRecords`, data);
  },
  getRecord: vehicleId => {
    console.log("calling get record", vehicleId);
    return axios.get(`RepairRecords/${vehicleId}`);
  }
};
