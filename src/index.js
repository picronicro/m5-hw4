import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    cart: [],
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            let bufferCart = [...state.cart]
            bufferCart.push(action.data)

            return {cart: bufferCart, counter: state.counter + 1}
        default:
            return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);
