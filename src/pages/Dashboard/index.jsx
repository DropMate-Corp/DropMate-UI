import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

export default function Dashboard() {
    return (
        <>
            <Container>
                <ACPTable acps={ACPs} />
                <ACPStatisticsTable stats={ACPStats} />
                <ACPRequestTable requests={Requests} />
                <Parcels parcels={data} />
                <PartnerTable partners={Partners} />
            </Container>
        </>
    )
}