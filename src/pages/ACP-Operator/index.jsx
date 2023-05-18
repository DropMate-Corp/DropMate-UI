
// Components
import ACPDetails from "./components/ACPDetails"
import BasicExample from "../../components/Navbar";
import ParcelsWaitingDeliveryTable from "./components/ParcelsWaitingDeliveryTable";
import ParcelsWaitingPickupTable from "./components/ParcelsWaitingPickupTable";

// Data
import { ACP as ACPData } from '../../_mocks/ACP.jsx';
import { ParcelsWaitingDelivery } from "../../_mocks/ParcelWaitingDelivery";
import { ParcelsWaitingPickup } from "../../_mocks/ParcelWaitingPickup";

export default function ACPOperator() {
    return (
        <>
            <BasicExample />
            <ACPDetails acp={ACPData}/>
            <ParcelsWaitingDeliveryTable parcels={ParcelsWaitingDelivery}/>
            <ParcelsWaitingPickupTable parcels={ParcelsWaitingPickup}/>
        </>
    )
}