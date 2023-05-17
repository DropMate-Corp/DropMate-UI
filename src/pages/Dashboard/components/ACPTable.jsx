import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const TABLE_HEADERS = [
    'Name',
    'Email',
    'Phone',
    'Address',
    'City',
    'Manager Contact',
    '',
];

export default function ACPTable({ acps }) {
    const [info, setInfo] = useState(acps);

    const navigate = useNavigate();

    const handleView = (event, acp) => {
        navigate(`/acp/${acp.id}`);
    };

    // Modal
    const [acpToDelete, setAcpToDelete] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (event, acp) => {
        event.preventDefault();
        setAcpToDelete(acp);
        setShow(true);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        setInfo(info.filter((acp) => acp.id !== acpToDelete.id));
        handleClose();
    };

    return (
        <>
            <Container className="mt-5 mb-5">
                <Row className="mb-3">
                    <Col>
                        <h2>Registered ACPs</h2>
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
                                            <td>{acp.email}</td>
                                            <td>{acp.telephone}</td>
                                            <td>{acp.address}</td>
                                            <td>{acp.city}</td>
                                            <td>{acp.manager}</td>
                                            <td>
                                                <Row>
                                                    <Col md={6}>
                                                        <Button variant="primary" onClick={(event) => handleView(event, acp)}>
                                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                        </Button>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Button variant="danger" onClick={(event) => handleShow(event, acp)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </td>
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
            {acpToDelete && <Modal show={show} onHide={handleClose}>
                <Modal.Body>Are you sure you want to delete {acpToDelete.name}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>}
        </>
    );
}
