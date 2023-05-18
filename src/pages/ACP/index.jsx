import BasicExample from "../../components/Navbar"

// Components
import ACPDetails from "./components/ACPDetails"
import Parcels from "./components/Parcels"

// Data
import { ACP as ACPData } from '../../_mocks/ACP.jsx';
import { Parcels as Data } from '../../_mocks/Parcel.jsx';

export default function ACP() {
    return (
        <>
            <BasicExample />
            <ACPDetails acp={ACPData}/>
            <Parcels parcels={Data}/>
        </>
    )
}