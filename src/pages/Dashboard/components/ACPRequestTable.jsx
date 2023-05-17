import React, { useState } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const TABLE_HEADERS = [
  'Name',
  'Email',
  'Phone',
  'Address',
  'City',
  'Manager Contact',
  'Status',
  '',
];

export default function ACPRequestTable({ requests }) {
  const [info, setInfo] = useState(requests);

  // Modal
  const [acpRequest, setAcpRequest] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (event, acp) => {
    event.preventDefault();
    setAcpRequest(acp);
    setShow(true);
  };

  const handleStatusChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setAcpRequest({ ...acpRequest, status: value });
  };

  const handleSave = () => {
    // TODO: Handle saving the updated status
    console.log(acpRequest);
    setInfo(
        info.map((acp) => {
            if (acp.id === acpRequest.id) {
                return acpRequest;
            }
            return acp;
        })
    );
    handleClose();
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="mb-3">
          <Col>
            <h2>ACPs Requests</h2>
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
                      <td>{acp.status}</td>
                      <td>
                        <Row>
                          <Col md={6}>
                            <Button
                              variant="primary"
                              onClick={(event) => handleShow(event, acp)}
                            >
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={TABLE_HEADERS.length}>No Requests found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      {acpRequest && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{acpRequest.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{acpRequest.motive}</Modal.Body>
          <Modal.Footer>
            <Form.Select onChange={handleStatusChange} value={acpRequest.status}>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </Form.Select>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
