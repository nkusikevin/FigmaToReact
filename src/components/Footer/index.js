import React from 'react'
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
				<footer class='footer-distributed'>
					<div class='footer-right'>
						<a href='#'>
							<FaSpotify />
						</a>
						<a href='#'>
							<FaYoutube />
						</a>
						<a href='#'>
							<FaDeezer />
						</a>
						<a href='#'>
							<SiApplemusic />
						</a>
						<a href='#'>
							<FaInstagram />
						</a>
						<a href='#'>
							<FaTwitter />
						</a>
						<a href='#'>
							<FaFacebook />
						</a>
					</div>

					<div class='footer-left'>
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
