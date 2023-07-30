import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function Contact() {
	return (
		<section id='contact' className='contact'>
			<Container>
				<h1>Contact Us</h1>
				<p>Drop a message for us, we'll get back to you ASAP!</p>
				<Row className='justify-content-center'>
					<Col lg={6} md={8} sm={12}>
						<Form.Group className='mb-3'>
							<Form.Label>Name</Form.Label>
							<Form.Control type='text' />
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control type='email' />
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Message</Form.Label>
							<Form.Control as='textarea' type='text' />
						</Form.Group>
						<a href='/'>Submit</a>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contact;
