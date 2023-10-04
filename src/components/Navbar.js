import React from 'react';
import {useSelector} from "react-redux";

function Navbar(props) {
    const counter = useSelector(state => state.counter)
    const cart = useSelector(state => state.cart)

    return (
        <div className="my_header">
            <p className="title">buy my stuff pls</p>
            <div className="cart" onClick={() => console.log(cart)}>
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" width="20px" height="20px"/>
                <p className="item_counter">{counter} | click on cart to log its content</p>
            </div>
        </div>
    );
}

export default Navbar;