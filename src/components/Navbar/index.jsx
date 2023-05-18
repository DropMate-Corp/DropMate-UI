import React from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  const navigate = useNavigate();

  // See if user is logged in
  const loggedIn = localStorage.getItem('loggedIn');

  // Log out
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  }

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">DropMate</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {loggedIn && <Navbar.Text>
            <a href="#login" onClick={handleLogout}>Log Out</a>
          </Navbar.Text>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;