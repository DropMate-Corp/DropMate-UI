import axios from "axios";

const adminUri = import.meta.env.VITE_DROPMATE_API_URI + '/admin';

// ACP RELATED METHODS

const getAllAcp = async () => {
    const response = await axios.get(adminUri + "/acp");
    return response.data;
};

const getAcp = async (id) => {
    const response = await axios.get(adminUri + "/acp/" + id);
    return response.data;
};

const deleteAcp = async (id) => {
    const response = await axios.delete(adminUri + "/acp/" + id);
    return response.data;
};

const getAllACPStatistics = async () => {
    const response = await axios.get(adminUri + "/acp/statistics");
    console.log(response.data);
    return response.data;
};

// PARCEL RELATED METHODS

const getParcelsInDelivery = async (id) => {
    const response = await axios.get(adminUri + "/parcels/" + id + "/delivery");
    return response.data;
};

const getParcelsWaitingPickup = async (id) => {
    const response = await axios.get(adminUri + "/parcels/" + id + "/pickup");
    return response.data;
};



export { 
    getAllAcp, 
    getAcp, 
    getParcelsInDelivery, 
    getParcelsWaitingPickup, 
    getAllACPStatistics,
    deleteAcp,
};
