import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <div className="logo footer__logo text-start">
                            <img src={logo} alt="logo"/>
                            <h5>Tasty Treat</h5>
                            <p>Try the most delicious dishes with us.
                             You won't regret it !</p>
                        </div>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer__title'>Delivery Time</h5>
                        <ListGroup className='delivery__time-list'>
                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer__title'>Contact</h5>
                        <ListGroup className='delivery__time-list'>
                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Location: 1571 Berkley Street,Philadelphia</span>
                            </ListGroupItem>

                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Phone: 715-575-4167</span>
                            </ListGroupItem>

                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Email: techzip@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer__title'>Newsletter</h5>
                        <p>Subcsribe our newsletter</p>
                        <div className='newsletter'>
                            <input type="email" placeholder='Enter your email'/>
                            <span>
                                <i class="ri-send-plane-fill"></i>
                            </span>
                        </div>
                    </Col>
                    <Col lg='3' md='4' sm='6'></Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg='6' md='6'>
                        <p className='copyright__text'>
                          © 2023, website made by Namiq. All Rights Reserved.
                        </p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='social__links d-flex align-items-center justify-content-end gap-4'>
                            <p className='m-0'>Follow:</p>
                            <span>
                                <Link to='https://www.facebook.com/tasty-treat'>
                                    <i class="ri-facebook-circle-fill"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='https://www.github.com/namiqmamedov'>
                                    <i class="ri-github-fill"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='https://www.youtube.com/@tastytreat'>
                                    <i class="ri-youtube-fill"></i>
                                </Link> 
                            </span>
                            <span>
                                <Link to='https://www.linkedin.com/tasty-treat'>
                                    <i class="ri-linkedin-fill"></i>
                                </Link>
                            </span>

                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}

export default Footer