import React from 'react'

function Contact() {
    return (
        <div class="contact section-padding" id='contact'>
            <div className="container">
            <div class='row'>
                <div class='col-lg-12'>
                    <div class='section-header text-center' >
                        <h2>Contact<span>Us</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>

                    </div>

                </div>

            </div>

            <div class="row">
                <div class="col-lg-5 col-sm-12">
                    <div className="left-contact">
                        <h3>Location:</h3>
                        <p>123,WestWood Lane,Calicut <br/>Kerala,India</p>
                        <h3>Email:</h3>
                        <p>Yourmail@mail.com</p>
                        <h3>Call Us:</h3>
                        <p>000 000 0000</p>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-sm-12">
                    <form action=''>
                        <label for="">Your Name</label>
                        <input type='text' class='form-control' placeholder='Your Name' required></input>
                        <label for="">Your Email</label>
                        <input type='email' class='form-control' placeholder='Your Email' required></input>
                        <label for="">Your Message</label>
                        <textarea class='form-control' placeholder='Your Message'></textarea>
                        <a href="#"  id='a1'>Submit form</a>

                    </form>
                </div>
            </div>
            </div>
        </div>

        

    )
}

export default Contact