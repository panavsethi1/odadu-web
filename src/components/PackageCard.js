import React from 'react';

function PackageCard({ image, name, desc }) {
	return (
		<div className='packages__card'>
			<img src={image} alt='' />
			<h3>{name}</h3>
			<p>{desc}</p>
			<a href='/'>Know more</a>
		</div>
	);
}

export default PackageCard;
