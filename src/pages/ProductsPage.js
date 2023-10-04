import React from 'react';
import products from "../products.json";
import {useDispatch, useSelector} from "react-redux";

function ProductsPage(props) {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    function addToCart(item) {
        dispatch({
            type: "ADD_ITEM",
            data: item
        })
    }

    return (
        <div className="product_list">
            {products && products.map(p =>
                <div key={p._id} className="item">
                    <div className="product_data">
                        <img src={p.picture} alt="" width="80px" height="50px"/>
                        <div className="desc">
                            <p>name: {p.name}</p>
                            <p>{p.price}</p>
                        </div>
                    </div>
                    <button onClick={() => addToCart(p)}>add to cart</button>
                </div>)
            }
        </div>
    );
}

export default ProductsPage;