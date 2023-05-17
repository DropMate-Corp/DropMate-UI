import React, { useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// Components
import ACPStats from './ACPStats';

// Data
import { Stats } from '../../../_mocks/Stats.jsx';

export default function ACPDetails({ acp }) {
    const [info, setInfo] = useState(acp);

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Form
    const [name, setName] = useState(info.name);
    const [email, setEmail] = useState(info.email);
    const [telephone, setTelephone] = useState(info.telephone);
    const [city, setCity] = useState(info.city);
    const [address, setAddress] = useState(info.address);
    const [manager, setManager] = useState(info.manager);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, telephone, city, address, manager);
        setInfo({
            name: name,
            email: email,
            telephone: telephone,
            city: city,
            address: address,
            manager: manager
        });
        handleClose();
    };

    return (
        <Container className="mt-5 mb-5">
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
                            <Button variant="primary" onClick={handleShow}>Edit</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <ACPStats stats={Stats}/>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit ACP Information</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTelephone">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="text" placeholder="Enter telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formManager">
                            <Form.Label>Manager Contact</Form.Label>
                            <Form.Control type="text" placeholder="Enter manager contact" value={manager} onChange={(e) => setManager(e.target.value)} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    )
}