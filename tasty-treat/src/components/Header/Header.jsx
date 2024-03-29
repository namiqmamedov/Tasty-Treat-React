import React, {useRef, useEffect} from 'react'
import {Container, Nav} from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import {NavLink, Link} from 'react-router-dom'
import '../../styles/header.css'
import { useSelector, useDispatch } from 'react-redux'

import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'

const nav_links = [
    {
        display: 'Home',
        path: '/home'
    }, {
        display: 'Foods',
        path: '/foods'
    }, {
        display: 'Cart',
        path: '/cart'
    }, {
        display: 'Contact',
        path: '/contact'
    }
]

const Header = () => {

    const dispatch = useDispatch()
    const menuRef = useRef(null)
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu') 

    const toggleCart = () =>{
        dispatch(cartUiActions.toggle())
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
          ) {
            headerRef.current.classList.add("header__shrink");
          } else {
            headerRef.current.classList.remove("header__shrink");
          }
        });
    
      }, []);
    
    return (
        <header className="header" ref={headerRef}>
            <Container>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <Link to='/'>
                        <img src={logo} alt="logo"/>
                        </Link>
                        <h5>Tasty Treat</h5>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {nav_links.map((item, index) => (
                                <NavLink
                                 className={navClass => navClass.isActive ? 'active__menu' : ""}
                                 to={item.path}
                                key={index}>
                                {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="nav-right d-flex align-items-center gap-4">
                        <span className="cart-icon" onClick={toggleCart}>
                            <i class="ri-shopping-basket-line"></i>
                            <span className='cart__badge'>{totalQuantity}</span>
                        </span>

                        <span className="user">
                            <Link to='/login'>
                                <i class="ri-user-line"></i>
                            </Link>
                        </span>

                        <div className="mobile__menu" onClick={toggleMenu }>
                            <i class="ri-menu-line"></i>
                        </div>

                    </div>

                </div>
            </Container>
        </header>
    )
}

export default Header