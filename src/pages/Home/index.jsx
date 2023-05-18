import React from 'react';

// Componenets
import BasicExample from '../../components/Navbar';
import Login from './components/Login';
import Request from './components/Request';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Home() {
    return (
        <>
            <BasicExample />
            <Container>
                <Row className='justify-content-md-center'>
                    <Col md={6} className='mt-5'>
                        <Login />
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col md={6} className='mt-5'>
                        <Request />
                    </Col>
                </Row>
            </Container>
        </>
    );
}   