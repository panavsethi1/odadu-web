import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cardImg1 from '../assets/odadu-card-1.jpg';
import cardImg2 from '../assets/odadu-card-2.jpg';
import cardImg3 from '../assets/odadu-card-3.jpg';
import PackageCard from './PackageCard';

function Packages() {
	const [cardsData, setCardsData] = useState([
		{
			image: cardImg2,
			name: 'package name',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati doloribus neque dolor quos laboriosam placeat voluptatibus eveniet asperiores facilis sed architecto et consequatur mollitia, a cum praesentium ipsum perspiciatis in.',
		},
		{
			image: cardImg1,
			name: 'package name',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati doloribus neque dolor quos laboriosam placeat voluptatibus eveniet asperiores facilis sed architecto et consequatur mollitia, a cum praesentium ipsum perspiciatis in.',
		},
		{
			image: cardImg3,
			name: 'package name',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati doloribus neque dolor quos laboriosam placeat voluptatibus eveniet asperiores facilis sed architecto et consequatur mollitia, a cum praesentium ipsum perspiciatis in.',
		},
		{
			image: cardImg2,
			name: 'package name',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati doloribus neque dolor quos laboriosam placeat voluptatibus eveniet asperiores facilis sed architecto et consequatur mollitia, a cum praesentium ipsum perspiciatis in.',
		},

		{
			image: cardImg1,
			name: 'package name',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati doloribus neque dolor quos laboriosam placeat voluptatibus eveniet asperiores facilis sed architecto et consequatur mollitia, a cum praesentium ipsum perspiciatis in.',
		},
		{
			image: cardImg3,
			name: 'package name',
			desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati doloribus neque dolor quos laboriosam placeat voluptatibus eveniet asperiores facilis sed architecto et consequatur mollitia, a cum praesentium ipsum perspiciatis in.',
		},
	]);
	return (
		<section id='packages' className='packages'>
			<Container className='packages__container'>
				<h1>Packages</h1>
				<Swiper
					spaceBetween={50}
					modules={[Navigation, Pagination]}
					breakpoints={{
						768: { slidesPerView: 2 },
						1120: { slidesPerView: 3 },
					}}
					navigation={true}
					pagination={true}
					loop
					className='packages__swiper'>
					{cardsData.map((cardData, index) => {
						return (
							<SwiperSlide className='packages__swiper__slide'>
								<PackageCard
									image={cardData.image}
									name={cardData.name}
									desc={cardData.desc}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Container>
		</section>
	);
}

export default Packages;
