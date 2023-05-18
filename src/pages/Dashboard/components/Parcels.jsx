import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

const ITEMS_PER_PAGE = 10; // Number of items to display per page

export default function Parcels({ parcels }) {
  const [data, setData] = useState(parcels);
  const [status, setStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (status === 'All') {
      setData(parcels);
    } else {
      setData(parcels.filter((parcel) => parcel.status === status));
    }
    setCurrentPage(1); // Reset current page when changing status
  }, [status, parcels]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // Pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Parcels</h2>
        </Col>
        <Col>
          <Form>
            <Form.Select
              aria-label="Default select example"
              onChange={handleStatusChange}
              value={status}
            >
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
              {currentItems.length > 0 ? (
                currentItems.map((parcel, index) => (
                  <tr key={index}>
                    <td>{parcel.parcel_id}</td>
                    <td>{parcel.delivery_code}</td>
                    <td>{parcel.pickup_code}</td>
                    <td>{parcel.weight}</td>
                    <td>{parcel.delivery_date}</td>
                    <td>{parcel.pickup_date}</td>
                    <td>{parcel.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No parcels found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination>
            <Pagination.Prev
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage > 1 ? prevPage - 1 : prevPage
                )
              }
              disabled={currentPage === 1}
            />
            {[...Array(Math.ceil(data.length / ITEMS_PER_PAGE))].map(
              (item, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            )}
            <Pagination.Next
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage < Math.ceil(data.length / ITEMS_PER_PAGE)
                    ? prevPage + 1
                    : prevPage
                )
              }
              disabled={
                currentPage === Math.ceil(data.length / ITEMS_PER_PAGE)
              }
            />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}
