import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Container, Form } from 'react-bootstrap';

const Contact = () => {
    const [ success, setSuccess ] = useState( false );
    const [ successMessage, setSuccessMessage ] = useState( '' );
    const [ error, setError ] = useState( '' );

    const sendEmail = ( e ) => {
        e.preventDefault();
        emailjs.sendForm( 'service_wkovuj4', 'template_0bj3nlo', e.target, 'user_NTt1KPYzFQZfll2DEFxve' )
            .then( ( result ) => {
                setSuccess( true );
                setSuccessMessage( "Your mail is sent successfully" );
            }, ( error ) => {
                setSuccess( false );
                setError( error.text );
            } );
        e.target.reset();
    };
    return (
        <Container className="my-5">
            <h1 className="my-5 text-primary">Thanks for taking the time to reach out. How may I help you today?</h1>
            {
                success ? <h4 className="text-success">{ successMessage }</h4> : <h4 className="text-danger">{ error }</h4>
            }
            <Form onSubmit={ sendEmail } className="form w-75 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Subject" name='subject' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Your Name" name='name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Your Email" name='email' />
                    <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Please Write Your Message Here</Form.Label>
                    <Form.Control as="textarea" rows={ 5 } name='message' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Mail
                </Button>
            </Form>
        </Container >
    );
};

export default Contact;