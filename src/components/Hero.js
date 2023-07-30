import React from 'react';
import logo from '../assets/odadu-logo.svg';
import PaymentModal from './PaymentModal';

function Hero() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<section id='hero' className='hero'>
			<div className='hero__content'>
				<img className='hero__content__logo' src={logo} alt='' />
				<div className='hero__content__buttons'>
					<a href='#packages'>Our Pacakges</a>
					<a
						onClick={(e) => {
							e.preventDefault();
							setModalShow(true);
						}}
						href='/'>
						Pay Now
					</a>
				</div>
			</div>
			<PaymentModal show={modalShow} onHide={() => setModalShow(false)} />
		</section>
	);
}

export default Hero;
