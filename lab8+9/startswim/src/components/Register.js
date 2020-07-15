import React,{Component} from 'react';
import {Container,Jumbotron, Form, Button} from 'react-bootstrap'



class Register extends Component {
    
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1> Register a Course</h1>
                    <p>Please fill the fields below to register for a course.</p> 

                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your first name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="xxx-xxx-xxxx" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Check type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCourse">
                            <Form.Label>Course</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Butterfly Stroke</option>
                                <option>Breast Stroke</option>
                                <option>Back Stroke</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Check type="date" placeholder="" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Jumbotron> 

                

            </Container>
        )
    }
}

export default Register