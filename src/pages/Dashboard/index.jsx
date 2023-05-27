import React, { useEffect, useState } from 'react';

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
import {
    getAllAcp,
    getAllACPStatistics,
    deleteAcp,
    getAllParcelsInDelivery,
    getAllParcelsWaitingPickup,
    getAllEstores
} from '../../services/adminService.jsx';

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
          const getParcelsWaitingPickup = await getAllParcelsWaitingPickup();
          const getParcelsInDelivery = await getAllParcelsInDelivery();
          
          const parcels = getParcelsWaitingPickup.concat(getParcelsInDelivery);
          const partners = await getAllEstores();
          
          setACP(acp);
          setStats(
            stats.map(stat => {
              const matchingAcp = acp.find(acp => acp.acpId == stat.acpId);
              if (matchingAcp) {
                stat.acpName = matchingAcp.name;
              }
              return stat;
            })
          );
          setParcels(parcels);
          setPartners(partners);
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
                <ACPTable acps={acps} deleteACP={(id) => deleteACP(id)} />
                <ACPStatisticsTable stats={stats} />
                <ACPRequestTable requests={Requests} />
                <Parcels parcels={parcels} />
                <PartnerTable partners={partners} />
            </Container>
        </>
    )
}