import React, { useState, useEffect } from "react";

// Components
import ACPDetails from "./components/ACPDetails"
import BasicExample from "../../components/Navbar";
import ParcelsWaitingDeliveryTable from "./components/ParcelsWaitingDeliveryTable";
import ParcelsWaitingPickupTable from "./components/ParcelsWaitingPickupTable";
import ParcelsDeliveredTable from "./components/ParcelsDeliveredTable";

// Data
import { ACP as ACPData } from '../../_mocks/ACP.jsx';
import { Parcels } from "../../_mocks/Parcel";

export default function ACPOperator() {
    const [parcels, setParcels] = useState([]);
    const [parcelsWaitingDelivery, setParcelsWaitingDelivery] = useState([]);
    const [parcelsWaitingPickup, setParcelsWaitingPickup] = useState([]);
    const [parcelsDelivered, setParcelsDelivered] = useState([]);
  
    useEffect(() => {
      setParcels(Parcels);
      setParcelsWaitingDelivery(Parcels.filter((parcel) => parcel.status === 'In Transit'));
      setParcelsWaitingPickup(Parcels.filter((parcel) => parcel.status === 'Pending'));
      setParcelsDelivered(Parcels.filter((parcel) => parcel.status === 'Delivered'));
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
  
    return (
      <>
        <BasicExample />
        <ACPDetails acp={ACPData} />
        <ParcelsWaitingDeliveryTable parcels={parcelsWaitingDelivery} updateStatus={(id, status) => updateParcelStatus(id, status)} />
        <ParcelsWaitingPickupTable parcels={parcelsWaitingPickup} updateStatus={(id, status) => updateParcelStatus(id, status)} />
        <ParcelsDeliveredTable parcels={parcelsDelivered} />
      </>
    );
  }
  