import React, {useEffect, useState} from 'react';
import products from "../products.json";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

function ProductsPage(props) {
    const [items, setItems] = useState([])

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getItems() {
            await axios.get("https://dummyjson.com/products?limit=10&skip=10")
                .then(resp => setItems(resp.data.products))
        }

        getItems()
    }, [])

    function addToCart(item) {
        dispatch({
            type: "ADD_ITEM",
            data: item
        })
    }

    return (
        <div className="product_list">
            {items && items.map(p =>
                <div key={p.id} className="item">
                    <div className="product_data">
                        <img src={p.images[0]} alt="" width="80px" height="50px"/>
                        <div className="desc">
                            <p>name: {p.title}</p>
                            <p>${p.price}</p>
                        </div>
                    </div>
                    <button onClick={() => addToCart(p)}>add to cart</button>
                </div>)
            }
        </div>
    );
}

export default ProductsPage;