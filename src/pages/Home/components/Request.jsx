import React, { useState } from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Request() {

    // Form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [manager, setManager] = useState('');
    const [description, setDescription] = useState('');

    // Handle Changes
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleManagerChange = (e) => {
        setManager(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        console.log('Phone: ' + phone);
        console.log('City: ' + city);
        console.log('Address: ' + address);
        console.log('Manager: ' + manager);
        console.log('Description: ' + description);
    }

    return(
        <>
            <h1>Request</h1>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="name" className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={handleNameChange}/>
                        </Form.Group>
                        <Form.Group controlId="email" className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
                        </Form.Group>
                        <Form.Group controlId="phone" className='mb-3'>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone" onChange={handlePhoneChange}/>
                        </Form.Group>
                        <Form.Group controlId="city" className='mb-3'>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" onChange={handleCityChange}/>
                        </Form.Group>
                        <Form.Group controlId="address" className='mb-3'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" onChange={handleAddressChange}/>
                        </Form.Group>
                        <Form.Group controlId="manager" className='mb-3'>
                            <Form.Label>Manager Contact</Form.Label>
                            <Form.Control type="text" placeholder="Enter manager contact" onChange={handleManagerChange}/>
                        </Form.Group>
                        <Form.Group controlId="description" className='mb-3'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter description" onChange={handleDescriptionChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>  
                </Card.Body>
            </Card>
        </>
    )
}