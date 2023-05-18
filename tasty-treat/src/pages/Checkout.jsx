import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Container, Row, Col} from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

const Checkout = () => {

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 5;

  const totalAmount = cartTotalAmount + Number(shippingCost);
    return (
        <Helmet title='Checkout'>
            <section>
                <Container>
                    <Row>
                        <Col lg='8' md='6'>
                            <h6 className='mb-4'>Shipping Address</h6>
                            <form className="checkout__form">
                                <div className="form__group">
                                    <input type="text" placeholder='Enter your name' required/>
                                </div>
                                <div className="form__group">
                                    <input type="email" placeholder='Enter your email' required/>
                                </div>
                                <div className="form__group">
                                    <input type="number" placeholder='Phone Number' required/>
                                </div>
                                <div className="form__group">
                                    <input type="text" placeholder='Country' required/>
                                </div>
                                <div className="form__group">
                                    <input type="number" placeholder='Postal code' required/>
                                </div>
                            </form>
                            <button type="submit" className="addToCart">Payment</button>
                        </Col>
                        <Col lg='4' md='6'>
                            <div className="checkout__bill">
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Subtotal:
                                    <span>${cartTotalAmount}</span>
                                </h6>
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Shipping:
                                    <span>${shippingCost}</span>
                                </h6>
                                <div className="checkout__total">
                                    <h5 className="d-flex align-items-center justify-content-between">
                                        Total:
                                        <span>${totalAmount}</span>
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout