import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PaymentModal(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Finalize Payment
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Group className='mb-3'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' />
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Phone number</Form.Label>
					<Form.Control type='text' />
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='text' />
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Package number</Form.Label>
					<Form.Control type='text' />
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Amount</Form.Label>
					<Form.Control type='text' />
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Currency</Form.Label>
					<Form.Check
						name='payment-currency'
						type='radio'
						label='USD'
						id={'payment-currency-usd'}
					/>
					<Form.Check
						name='payment-currency'
						type='radio'
						label='INR'
						id={'payment-currency-inr'}
					/>
					<Form.Check
						name='payment-currency'
						type='radio'
						label='AED'
						id={'payment-currency-aed'}
					/>
				</Form.Group>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Confirm</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default PaymentModal;
