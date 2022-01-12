import React from 'react'
import { Link } from 'react-router-dom';
import {
	FaSpotify,
	FaYoutube,
	FaDeezer,
	FaInstagram,
	FaTwitter,
	FaFacebook
} from "react-icons/fa";
import{SiApplemusic} from 'react-icons/si'
import "./Footer.css"
function index() {
    return (
			<section className='footer'>
				<footer className='footer-distributed'>
					<div className='footer-right'>
						<Link to='#'>
							<FaSpotify />
						</Link>
						<Link to='#'>
							<FaYoutube />
						</Link>
						<Link to='#'>
							<FaDeezer />
						</Link>
						<Link to='#'>
							<SiApplemusic />
						</Link>
						<Link to='#'>
							<FaInstagram />
						</Link>
						<Link to='#'>
							<FaTwitter />
						</Link>
						<Link to='#'>
							<FaFacebook />
						</Link>
					</div>

					<div className='footer-left'>
						<p>
							Rita Ange Kagaju &copy; {new Date().getFullYear()} All rights
							reserved
						</p>
					</div>
				</footer>
			</section>
		);
}

export default index
