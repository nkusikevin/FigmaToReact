import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Latest.css"
function index() {
    const responsive = {
			desktop: {
				breakpoint: { max: 3000, min: 1024 },
				items: 3,
				slidesToSlide: 3, // optional, default to 1.
			},
			tablet: {
				breakpoint: { max: 1024, min: 464 },
				items: 2,
				slidesToSlide: 2, // optional, default to 1.
			},
			mobile: {
				breakpoint: { max: 464, min: 0 },
				items: 1,
				slidesToSlide: 1, // optional, default to 1.
			},
		};
    return (
			<section className='latest'>
				<h2>Latest Release</h2>
				<Carousel responsive={responsive}>
					<div>
						<iframe
							width='853'
							height='480'
							src={`https://www.youtube.com/embed/GZwXNmZeKAw?controls=0&autoplay=0`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='Embedded youtube'
						/>
					</div>
					<div>
						<iframe
							width='853'
							height='480'
							src={`https://www.youtube.com/embed/AuhmEvirSss?controls=0&autoplay=0`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='Embedded youtube'
						/>
					</div>
					<div>
						<iframe
							width='853'
							height='480'
							src={`https://www.youtube.com/embed/FLixbZ4-rE8?controls=0&autoplay=0`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='Embedded youtube'
						/>
					</div>
					<div>
						<iframe
							width='853'
							height='480'
							src={`https://www.youtube.com/embed/1ERMHpZH51M?controls=0&autoplay=0`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='Embedded youtube'
						/>
					</div>
				</Carousel>
				;
			</section>
		);
}

export default index
