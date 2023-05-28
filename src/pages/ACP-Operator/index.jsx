import React, { useState, useEffect } from "react";

// Components
import ACPDetails from "./components/ACPDetails"
import BasicExample from "../../components/Navbar";
import ParcelsWaitingDeliveryTable from "./components/ParcelsWaitingDeliveryTable";
import ParcelsWaitingPickupTable from "./components/ParcelsWaitingPickupTable";
import ParcelsDeliveredTable from "./components/ParcelsDeliveredTable";
import EditableStatCard from "./components/EditableStatCard";

// Data
import { ACP as ACPData } from '../../_mocks/ACP.jsx';

// Services
import {
  getAllParcelsInDelivery,
  getAllParcelsWaitingPickup,
  getAllParcelsDelivered,
  getACPLimit,
  updateACPLimit,
} from "../../services/operatorService";

export default function ACPOperator() {
  const [parcels, setParcels] = useState([]);
  const [parcelsWaitingDelivery, setParcelsWaitingDelivery] = useState([]);
  const [parcelsWaitingPickup, setParcelsWaitingPickup] = useState([]);
  const [parcelsDelivered, setParcelsDelivered] = useState([]);
  const [acpLimit, setACPLimit] = useState(null);

  const acpId = 1;

  useEffect(() => {
    const fetchParcels = async () => {
      const parcelsInDelivery = await getAllParcelsInDelivery(acpId);
      const parcelsWaitingPickup = await getAllParcelsWaitingPickup(acpId);
      const parcelsDelivered = await getAllParcelsDelivered(acpId);
      const acpLimit = await getACPLimit(acpId);

      setParcels(parcelsInDelivery);
      setParcelsWaitingDelivery(parcelsInDelivery);
      setParcelsWaitingPickup(parcelsWaitingPickup);
      setParcelsDelivered(parcelsDelivered);
      setACPLimit(acpLimit);
    }

    fetchParcels();
  }, []);

  // Update parcel status
  const updateParcelStatus = (parcelID, status) => {
    const updatedParcels = parcels.map((parcel) => {
      if (parcel.parcel_id === parcelID) {
        // Add delivery date if parcel status changed to Pending else add pickup date
        if (status === 'Pending') {
          parcel.delivery_date = new Date().toString();
        } else if (status === 'Delivered') {
          parcel.pickup_date = new Date().toString();
        }
        parcel.status = status;
      }
      return parcel;
    });

    setParcels(updatedParcels);
    setParcelsWaitingDelivery(updatedParcels.filter((parcel) => parcel.status === 'In Transit'));
    setParcelsWaitingPickup(updatedParcels.filter((parcel) => parcel.status === 'Pending'));
    setParcelsDelivered(updatedParcels.filter((parcel) => parcel.status === 'Delivered'));
  };

  const updateLimit = async (limit) => {
    const updatedLimit = await updateACPLimit(acpId, limit);
    setACPLimit(updatedLimit);
  }

  return (
    <>
      <BasicExample />
      <ACPDetails acp={ACPData} />
      {acpLimit && <EditableStatCard title="Limit" stat={acpLimit} updateLimit={(limit) => updateLimit(limit)}/>}
      <ParcelsWaitingDeliveryTable parcels={parcelsWaitingDelivery} updateStatus={(id, status) => updateParcelStatus(id, status)} />
      <ParcelsWaitingPickupTable parcels={parcelsWaitingPickup} updateStatus={(id, status) => updateParcelStatus(id, status)} />
      <ParcelsDeliveredTable parcels={parcelsDelivered} />
    </>
  );
}
