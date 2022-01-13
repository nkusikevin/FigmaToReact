import * as React from "react";
import "./About.css";

function About() {
	return (
		<section className='about'id="about">
			<div className='container'>
				<div className='column-1 box'>
					<img
						src='https://i.scdn.co/image/ab6761610000e5ebbffe4d4d7ac2453da60a7660'
						alt=''
					/>
				</div>
				<div className='column-2 box'>
					<h1>About Me</h1>
					<p>
						What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
