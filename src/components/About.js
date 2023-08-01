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
							Experience mid-east with <span>Odadu</span>
						</h2>
						<p>
							Odadu means "love travelling" in regional indian language. With
							deep love for travelling, our founders set up the parent company
							in 2013 back in India. With robust growth and momentum, the
							company was soon found setting up offices in Australia and now
							UAE.
							<br />
							<br />
							Odadu caters to B2B segment of travel market having strong hold in
							hotels and sightseeing verticals of travel. Accor, Hilton,
							Millennium group of properties are our growing partners across
							different hotel verticals. With growing numbers in "Turkey, Egypt,
							Jordan" along with UAE, Odadu travels FZ LLC in Dubai is well
							positioned to capture the above market.
							<br />
							<br />
							For partnerships, drop us a mail at{' '}
							<a href='mailto:info@odaduu.com'>info@odaduu.com</a>.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default About;
