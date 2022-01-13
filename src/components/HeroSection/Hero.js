import React from "react";
import "./Hero.css";
import {Link} from "react-router-dom";
function Hero() {
	return (
		<section className='hero' id='home'>
			<div className='grid-container'>
				<figure className='grid_item grid_item-1'>
					<img
						className='grid_image'
						src='https://i0.wp.com/my250tv.com/wp-content/uploads/2020/03/kagaju.jpg?fit=900%2C510&ssl=1'
						alt=''
					/>
				</figure>

				<figure className='grid_item grid_item-2'>
					<img
						className='grid_image'
						src='https://media.istockphoto.com/photos/smile-made-of-white-earphones-and-text-music-makes-everything-better-picture-id1218611246?b=1&k=20&m=1218611246&s=170667a&w=0&h=jOY2_lqRqoJWFnV7HPo_10tZEwg2F-yHAfMBM5X203Y='
						alt=''
					/>
				</figure>
			</div>
			<Link to='contact'>
			<div className='btn'>Contact Me</div>
			</Link>
		</section>
	);
}

export default Hero;
