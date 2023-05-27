import React, { useState, useEffect } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const TABLE_HEADERS = [
    'Name',
    'Parcel Limit',
    'Parcels Waiting for Delivery',
    'Parcels Waiting for Pickup',
    'Parcels Delivered',
];

export default function ACPStatisticsTable({ stats }) {
    const [info, setInfo] = useState();

    useEffect(() => {
        setInfo(stats);
    }, [stats]);

    if (!stats) return (
        <>
            <Container className="mt-5 mb-5">
                <Row className="mb-3">
                    <Col>
                        <h2>ACPs Statistics</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {TABLE_HEADERS.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={TABLE_HEADERS.length}>Loading...</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );

    return (
        <>
            <Container className="mt-5 mb-5">
                <Row className="mb-3">
                    <Col>
                        <h2>ACPs Statistics</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {TABLE_HEADERS.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {info ? (
                                    info.map((acp, index) => (
                                        <tr key={index}>
                                            <td>{acp.name}</td>
                                            <td>{acp.parcel_limit}</td>
                                            <td>{acp.parcels_waiting_for_delivery}</td>
                                            <td>{acp.parcels_waiting_for_pickup}</td>
                                            <td>{acp.parcels_delivered}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={TABLE_HEADERS.length}>No ACPs found</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}