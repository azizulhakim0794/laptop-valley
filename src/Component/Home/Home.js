import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './Home.css'
import Products from './Products';
import Loading from '../CommonComponent/Loading/Loading';
const NavBar = React.lazy(() => import('../CommonComponent/NavBar/NavBar.js'))
const Footer = React.lazy(() => import('../CommonComponent/Footer/Footer'))
const Home = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        axios.get('/allProducts')
            .then(res => setAllProducts(res.data))
    }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="input-group mb-3 mt-5 ">
                    <input type="text" className="form-control col-md-10" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-dark" type="button" id="button-addon2">Button</button>
                </div>
                <div className="row mt-5">
                    {
                        allProducts.length ? allProducts.map(data => <Products data={data} key={data._id} />) : <Loading />
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;