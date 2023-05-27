import React, {useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';

// Components
import ACPTable from './components/ACPTable.jsx';
import Parcels from './components/Parcels.jsx';
import PartnerTable from './components/PartnerTable.jsx';
import ACPRequestTable from './components/ACPRequestTable.jsx';
import ACPStatisticsTable from './components/ACPStatisticsTable.jsx';

// Data
import { ACPs } from '../../_mocks/ACP.jsx';
import { Parcels as data } from '../../_mocks/Parcel.jsx';
import { Partners } from '../../_mocks/Partner.jsx';
import { Requests } from '../../_mocks/Requests.jsx';
import { ACPStats } from '../../_mocks/Stats.jsx';

// Services
import { getAllAcp, getAllACPStatistics, deleteAcp } from '../../services/adminService.jsx';

export default function Dashboard() {
    const [acps, setACP] = useState([]);
    const [parcels, setParcels] = useState([]);
    const [partners, setPartners] = useState([]);
    const [requests, setRequests] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const acp = await getAllAcp();
            const stats = await getAllACPStatistics();
            setACP(acp);
            setStats(stats);
        }
        fetchData();
    }, []);

    const deleteACP = async (id) => {
        await deleteAcp(id);
        setACP(acps.filter(acp => acp.acpId !== id));
    };

    return (
        <>
            <Container>
                <ACPTable acps={acps} deleteACP={(id) => deleteACP(id)}/>
                <ACPStatisticsTable stats={ACPStats} />
                <ACPRequestTable requests={Requests} />
                <Parcels parcels={data} />
                <PartnerTable partners={Partners} />
            </Container>
        </>
    )
}