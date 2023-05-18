import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export default function Login() {
    const navigate = useNavigate();

    // Form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);

    // Form Handlers
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleAdminChange = (e) => {
        setAdmin(e.target.checked);
    }

    // Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email: ', email);
        console.log('Password: ', password);
        console.log('Admin: ', admin);

        // TODO: Add authentication

        // Set Log in Local Storage
        localStorage.setItem('loggedIn', true);

        // Redirect to Admin if admin is true
        if (admin) {
            navigate('/admin');
        } else {
            navigate('/acp-operator');
        }
    }

    return (
        <>
            <h1>Login</h1>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Admin" onChange={handleAdminChange} />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}