import React, { useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Components
import ACPStats from './ACPStats';

// Data
import { Stats } from '../../../_mocks/Stats.jsx';

export default function ACPDetails({ acp }) {
    const [info, setInfo] = useState(acp);

    return (
        <Container className="mt-5 mb-3">
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{info.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{info.email}</Card.Subtitle>
                            <Card.Text>
                                <strong>Location:</strong> {info.address}, {info.city}
                            </Card.Text>
                            <Card.Text>
                                <strong>Telephone:</strong> {info.telephone}
                            </Card.Text>
                            <Card.Text>
                                <strong>Manager Contact:</strong> {info.manager}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <ACPStats stats={Stats}/>
                </Col>
            </Row>
        </Container>
    )
}