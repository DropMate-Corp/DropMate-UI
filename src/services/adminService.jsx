import axios from "axios";

const adminUri = import.meta.env.VITE_DROPMATE_API_URI + '/admin';

const getAllAcp = async () => {
    const response = await axios.get(adminUri + "/acp");
    return response.data;
};

const getAcp = async (id) => {
    const response = await axios.get(adminUri + "/acp/" + id);
    return response.data;
};

const getParcelsInDelivery = async (id) => {
    const response = await axios.get(adminUri + "/parcels/" + id + "/delivery");
    return response.data;
};

const getParcelsWaitingPickup = async (id) => {
    const response = await axios.get(adminUri + "/parcels/" + id + "/pickup");
    return response.data;
};

export { getAllAcp, getAcp, getParcelsInDelivery, getParcelsWaitingPickup };
