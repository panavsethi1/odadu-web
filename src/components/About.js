import React from 'react';
import aboutImg from '../assets/about-image.jpg';
import { Col, Container, Row } from 'react-bootstrap';

function About() {
	return (
		<section id='about' className='about'>
			<Container fluid='md'>
				<h1>About Us</h1>
				<Row>
					<Col md={12} lg={6} className='about__col-1'>
						<img src={aboutImg} alt='' />
					</Col>
					<Col md={12} lg={6} className='about__col-2'>
						<h2>
							Experience Dubai with <span>Odadu</span>
						</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
							quibusdam quis sed iste, eaque inventore dolores magni dolorem
							molestias porro, error nulla enim numquam voluptatem facilis
							impedit nobis non, aperiam illum explicabo provident! Quaerat
							autem suscipit nihil, tempora harum similique repellat eaque
							perspiciatis quasi labore. Officia aliquam necessitatibus nisi
							maiores.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default About;
