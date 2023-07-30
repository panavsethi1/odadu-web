import React from 'react';
import cardImg1 from '../assets/odadu-card-1.jpg';
import cardImg2 from '../assets/odadu-card-2.jpg';
import cardImg3 from '../assets/odadu-card-3.jpg';
import { Col, Container, Row } from 'react-bootstrap';

function Packages() {
	return (
		<section id='packages' className='packages'>
			<Container>
				<h1>Packages</h1>
				<Row>
					<Col lg={4} md={6} sm={12}>
						<div className='packages__card'>
							<img src={cardImg2} alt='' />
							<h3>package name</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Obcaecati doloribus neque dolor quos laboriosam placeat
								voluptatibus eveniet asperiores facilis sed architecto et
								consequatur mollitia, a cum praesentium ipsum perspiciatis in.
							</p>
							<a href='/'>Know more</a>
						</div>
					</Col>
					<Col lg={4} md={6} sm={12}>
						<div className='packages__card'>
							<img src={cardImg1} alt='' />
							<h3>package name</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Obcaecati doloribus neque dolor quos laboriosam placeat
								voluptatibus eveniet asperiores facilis sed architecto et
								consequatur mollitia, a cum praesentium ipsum perspiciatis in.
							</p>
							<a href='/'>Know more</a>
						</div>
					</Col>
					<Col lg={4} md={6} sm={12}>
						<div className='packages__card'>
							<img src={cardImg3} alt='' />
							<h3>package name</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Obcaecati doloribus neque dolor quos laboriosam placeat
								voluptatibus eveniet asperiores facilis sed architecto et
								consequatur mollitia, a cum praesentium ipsum perspiciatis in.
							</p>
							<a href='/'>Know more</a>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Packages;
