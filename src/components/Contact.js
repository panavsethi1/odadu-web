import Axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function Contact() {
	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [disable, setDisable] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setDisable(true);
		if (
			!contactData.name.length ||
			!contactData.email.length ||
			!contactData.message.length
		) {
			alert('Please fill in all the details!');
			setDisable(false);
		} else if (
			!contactData.email
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
		) {
			alert('Please fill in a valid email address!');
			setDisable(false);
		} else {
			Axios.post(
				'https://bored-goat-bedclothes.cyclic.app/contact',
				{ data: contactData },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			).then((res) => {
				if (res.status === 201 || res.status === 200) {
					setDisable(false);
					alert("Message successfully sent! We'll get back to you asap.");
					setContactData({ name: '', email: '', message: '' });
				} else {
					setDisable(false);
					alert('Error in sending your message! Please try again.');
					setContactData({ name: '', email: '', message: '' });
				}
			});
		}
	};

	return (
		<section id='contact' className='contact'>
			<Container>
				<h1>Contact Us</h1>
				<p>Drop a message for us, we'll get back to you ASAP!</p>
				<Row className='justify-content-center'>
					<Col lg={6} md={8} sm={12}>
						<Form.Group className='mb-3'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								onChange={(e) => {
									setContactData((prev) => {
										return { ...prev, name: e.target.value };
									});
								}}
								type='text'
								value={contactData.name}
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								onChange={(e) => {
									setContactData((prev) => {
										return { ...prev, email: e.target.value };
									});
								}}
								type='email'
								value={contactData.email}
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Message</Form.Label>
							<Form.Control
								as='textarea'
								onChange={(e) => {
									setContactData((prev) => {
										return { ...prev, message: e.target.value };
									});
								}}
								type='text'
								value={contactData.message}
							/>
						</Form.Group>
						<a
							style={{
								backgroundColor: disable ? '#dddddd' : '#f94f03',
								pointerEvents: disable ? 'none' : 'all',
							}}
							onClick={handleSubmit}
							href='/'>
							Submit
						</a>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contact;
