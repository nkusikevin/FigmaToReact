import React from 'react'
import "./Contact.css"
function index() {
    return (
        <section className='contact' id="contact">
           <div className="contact_container">
    <div className="card">
        <div className="form">
            <div className="left-side"> <span className="line1"></span> <span className="line2"></span> <span className="line3"></span>
                <div className="contact-us">
                    <p>Contact Me</p> <span></span>
                </div>
                <div className="social"> <i className="fa fa-facebook-f"></i> <i className="fa fa-twitter"></i> <i className="fa fa-instagram"></i> <i className="fa fa-dribbble"></i> </div>
            </div>
            <div className="right-side">
                <div className="top-div">
                    <h2>Get in touch !</h2>
                    <p>You can Email me through the below form </p>
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
