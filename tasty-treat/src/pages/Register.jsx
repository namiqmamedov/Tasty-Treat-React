import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/checkout.css'

const Register = () => {

    return (
        <Helmet title='Register'>
            <CommonSection title='Register'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6' className='m-auto text-center'>
                            <form className='form mb-5'>
                                <div className='form__group'>
                                    <input type="text" placeholder='Fullname' required/>
                                </div>
                                <div className='form__group'>
                                    <input type="email" placeholder='Email' required/>
                                </div>
                                <div className='form__group'>
                                    <input type="password" placeholder='Password' required/>
                                </div>
                                <button type='submit' className='addToCart'>Sign Up</button>
                            </form>
                            <Link to='/login'>Back to login</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Register