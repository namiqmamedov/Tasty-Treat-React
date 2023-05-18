import React from 'react'
import '../styles/contact.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <div>
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-5">
                            <h2 class="heading-section">Contact Form </h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="wrapper">
                                <div class="row no-gutters">
                                    <div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div class="contact-wrap w-100 p-md-5 p-4">
                                            <h3 class="mb-4">Get in touch</h3>
                                            <div id="form-message-warning" class="mb-4"></div>
                                            <div id="form-message-success" class="mb-4">
                                                Your message was sent, thank you!
                                            </div>
                                            <form id="contactForm" name="contactForm" class="contactForm">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div id='fullname' class="form-group">
                                                            <label class="label" for="name">Full Name</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                name="name"
                                                                id="name"
                                                                placeholder="Name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div id='email' class="form-group">
                                                            <label class="label" for="email">Email Address</label>
                                                            <input
                                                                type="email"
                                                                class="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div id='subject' class="form-group">
                                                            <label class="label" for="subject">Subject</label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Subject"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div id='message' class="form-group">
                                                            <label class="label" for="#">Message</label>
                                                            <textarea
                                                                name="message"
                                                                class="form-control"
                                                                id="message"
                                                                cols="30"
                                                                rows="4"
                                                                placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group mt-4">
                                                            <input type="submit" value="Send Message" class="btn btn-primary"/>
                                                            <div class="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-5 d-flex align-items-stretch">
                                        <div class="info-wrap w-100 p-md-5 p-4">
                                            <h3>Let's get in touch</h3>
                                            <p class="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <div class="dbox w-100 d-flex align-items-start">
                                                <div class="icon d-flex align-items-center justify-content-center">
                                                    <AiOutlineHome/>
                                                </div>
                                                <div class="text pl-3">
                                                    <p>
                                                        <span>Address:</span>
                                                        1571 Berkley Street,Philadelphia</p>
                                                </div>
                                            </div>
                                            <div class="dbox w-100 d-flex align-items-center">
                                                <div class="icon d-flex align-items-center justify-content-center">
												<BsFillTelephoneFill/>

                                                </div>
                                                <div class="text pl-3">
                                                    <p>
                                                        <span>Phone:</span>
                                                        <a href="tel://1234567920">+ 1 715-575-4167</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="dbox w-100 d-flex align-items-center">
                                                <div class="icon d-flex align-items-center justify-content-center">
												<AiOutlineMail/>

                                                </div>
                                                <div class="text pl-3">
                                                    <p>
                                                        <span>Email:</span>
                                                        <a href="mailto:techzip@gmail.com">techzip@gmail.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact