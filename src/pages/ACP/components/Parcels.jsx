import React, { useState, useEffect } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function Parcels({ parcels }) {
    const [data, setData] = useState(parcels);
    const [status, setStatus] = useState('All');

    useEffect(() => {
        if (status === 'All') {
            setData(parcels);
        } else {
            setData(parcels.filter(parcel => parcel.status === status));
        }
    }, [status, parcels]);

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Parcels</h2>
                </Col>
                <Col>
                    <Form>
                        <Form.Select aria-label="Default select example" onChange={handleStatusChange} value={status}>
                            <option value="All">All</option>
                            <option value="In Transit">Waiting for Delivery</option>
                            <option value="Pending">Waiting for Pickup</option>
                        </Form.Select>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Parcel ID</th>
                                <th>Delivery Code</th>
                                <th>Pickup Code</th>
                                <th>Weight</th>
                                <th>Delivery Date</th>
                                <th>Pickup Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? (
                                data.map((parcel, index) => (
                                    <tr key={index}>
                                        <td>{parcel.parcel_id}</td>
                                        <td>{parcel.delivery_code}</td>
                                        <td>{parcel.pickup_code}</td>
                                        <td>{parcel.weight}</td>
                                        <td>{parcel.delivery_date}</td>
                                        <td>{parcel.pickup_date}</td>
                                        <td>{parcel.status}</td>
                                    </tr>
                                ))) : (
                                <tr>
                                    <td colSpan="7">No parcels found</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
