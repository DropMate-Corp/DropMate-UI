import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">DropMate</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;