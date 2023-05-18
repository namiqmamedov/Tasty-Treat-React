import React, {useState, useEffect} from 'react'
import products from '../data/products'
import {useParams} from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import {Container, Row, Col} from 'reactstrap'
import productImg from '../assets/images/product_01.1.jpg'
import '../styles/product-details.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'
import ProductCard from '../components/UI/product-card/ProductCard'

const FoodDetails = () => {

    const [tab,
        setTab] = useState('desc')
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = products.find(product => product.id === id)
    const [previewImg,
        setPreviewImg] = useState(product.image01)
    const {title, price, category, desc, image01} = product

    const relatedProduct = products.filter(item => category === item.category)
    const addItem = () =>{
      dispatch(cartActions.addItem({
        id,
        title,
        price,
        image01
    }))
    }

    useEffect(() => {
        setPreviewImg(product.image01)
    }, [product])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [product]);

    return (
        <Helmet title='Product-details'>
            <CommonSection title={title}/>

            <section className='food-details'>
                <Container>
                    <Row>
                        <Col lg='2' md='2'>
                            <div className='product__images'>
                                <div className="img__item" onClick={() => setPreviewImg(product.image01)}>
                                    <img src={product.image01} alt="img"/>
                                </div>
                                <div className="img__item" onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt="img"/>
                                </div>
                                <div className="img__item" onClick={() => setPreviewImg(product.image03)}>
                                    <img src={product.image03} alt="img"/>
                                </div>
                            </div>
                        </Col>

                        <Col lg='4' md='4'>
                            <div className="product__main-img">
                                <img src={previewImg} alt="" className='w-100'/>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className='single__product-content'>
                                <h2 className='product__title mb-3'>{title}</h2>
                                <span className='product__price'>Price:
                                    <span>${price}</span>
                                </span>
                                <p className='category mb-5'>Category:
                                    <span>{category}</span>
                                </p>

                                <button onClick={addItem} className='addToCart'>Add to Cart
                                </button>

                            </div>
                        </Col>

                        <Col lg='12'>
                            <div className="tabs d-flex align-items-center gap-5 py-3">
                                <h6
                                    className={` ${tab === 'desc'
                                    ? 'tab__active'
                                    : ''}`}
                                    onClick={() => setTab('desc')}>Description</h6>
                                <h6
                                    className={` ${tab === 'rev'
                                    ? 'tab__active'
                                    : ''}`}
                                    onClick={() => setTab('rev')}>Review</h6>
                            </div>

                            {tab === 'desc'
                                ? <div className="tab__content">
                                        <p>{desc}</p>
                                    </div>
                                : <div className="tab__form mb-3 mt-4 ">

                                    <div className="review">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className='user__email'>user@protonmail.com</p>
                                        <p className='feedback__text'>great product</p>
                                    </div>
                                    <div className="review">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className='user__email'>user@protonmail.com</p>
                                        <p className='feedback__text'>great product</p>
                                    </div>
                                    <div className="review">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className='user__email'>user@protonmail.com</p>
                                        <p className='feedback__text'>great product</p>
                                    </div>

                                    <form className='form'>
                                        <div className='form__group'>
                                            <input type="text" placeholder='Enter your name' required/>
                                        </div>

                                        <div className='form__group'>
                                            <input type="email" placeholder='Enter your email' required/>
                                        </div>

                                        <div className='form__group'>
                                            <textarea rows={5} type="text" placeholder='Write your review'/>
                                        </div>
                                        <button type='submit' className='addToCart'>Submit</button>
                                    </form>
                                </div>
}
                        </Col>
                        <Col lg='12' className='mb-5 mt-4'>
                            <h2 className='related__product-title'>You might also like</h2>
                        </Col>
                        {relatedProduct.map(item => (
                            <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                                <ProductCard item={item}/>
                            </Col>
                        ))
}
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default FoodDetails