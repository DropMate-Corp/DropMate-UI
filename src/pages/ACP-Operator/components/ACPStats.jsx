// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import StatCard from './StatCard';

export default function ACPStats({ stats }) {
    return (
        <Row>
            <Col md={6} className='mb-2'>
                <StatCard title="Parcels Waiting Delivery" subtitle="Total Parcels" stat={stats.parcels_waiting_for_delivery} />
            </Col>
            <Col md={6}>
                <StatCard title="Parcels Waiting Pickup" subtitle="Total Parcels" stat={stats.parcels_waiting_for_pickup} />
            </Col>
            <Col md={6}>
                <StatCard title="Parcels Delivered" subtitle="Total Parcels" stat={stats.parcels_delivered} />
            </Col>
        </Row>
    )
}