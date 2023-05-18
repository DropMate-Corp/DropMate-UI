import React, {useState} from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EditableStatCard({ title, stat }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newStat, setNewStat] = useState(stat);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>    
                <Card.Text>
                    {newStat}
                </Card.Text>
                {isEditing ?
                    <Form>
                        <Form.Group controlId="formBasicEmail" className="mb-2">
                            <Form.Control type="number" placeholder="Enter new stat" value={newStat} onChange={(e) => setNewStat(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit}>
                            Update
                        </Button>
                    </Form>
                    :
                    <Button variant="primary" onClick={handleEdit}>Edit</Button>
                }
            </Card.Body>
        </Card>
    )
}