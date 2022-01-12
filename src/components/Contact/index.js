import React from 'react'
import "./Contact.css"
function index() {
    return (
        <section className='contact'>
           <div className="contact_container">
    <div className="card">
        <div className="form">
            <div className="left-side"> <span className="line1"></span> <span className="line2"></span> <span className="line3"></span>
                <div className="contact-us">
                    <p>Contact Us</p> <span></span>
                </div>
                <div className="social"> <i className="fa fa-facebook-f"></i> <i className="fa fa-twitter"></i> <i className="fa fa-instagram"></i> <i className="fa fa-dribbble"></i> </div>
            </div>
            <div className="right-side">
                <div className="top-div">
                    <h2>Get in touch !</h2>
                    <p>Contact us for a quote,help or to join the team. </p>
                </div>
                <div className="stats">
                    <div className="stats1"> <i className="fa fa-map-marker"></i> <span>102 Street 2714 DONNZY</span> </div>
                    <div className="stats1"> <i className="fa fa-phone"></i> <span>+02 1203 153</span> </div>
                    <div className="stats1"> <i className="fa fa-envelope"></i> <span>contact@us.fr</span> </div>
                </div>
                <div className="card-content"> <span>
                        <div className="input-text"> <input type="text" required="required"/> <small>Name</small> </div>
                        <div className="input-text"> <input type="text" required="required"/> <small>E-mail</small> </div>
                        <div className="textarea"> <textarea required="required"></textarea> <small>Message</small> </div>
                    </span> </div>
                <div className="buttons"> <button>SEND</button> </div>
            </div>
        </div>
    </div>
</div> 
        </section>
    )
}

export default index
