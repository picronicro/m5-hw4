import React from 'react';
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";

function App(props) {
    return (
        <div>
            <Navbar />
            <ProductsPage />
            <footer>m5-hw4</footer>
        </div>
    );
}

export default App;