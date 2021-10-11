import axios from '../../axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../CommonComponent/Footer/Footer';
import NavBar from '../CommonComponent/NavBar/NavBar';
import { UserContext } from '../../App';

const ProductCheckout = () => {
    let { id } = useParams()
    const [product ,setProduct] =useState({})
    const [userDataInfo] = useContext(UserContext)
    const history = useHistory()
    useEffect(()=>{
        axios.get('/product/'+id)
        .then(res=> setProduct(res.data))
    },[id])
    const handleUserOrder = async() =>{
        await axios.post('/addUserOrder',{
            productName:product.name,
            productQuantity:1,
            productPrice:product.price,
            userEmail:userDataInfo.email,
            productId:product._id,
        })
        .then(res => {
            console.log()
            if(res.status === 201){
                history.push('/userOrder')
            }
        })
       
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row border-bottom mt-5">
                    <h6 className="text-secondary col-md-7"> Description</h6>
                    <h6 className="text-secondary col-md-4"> Quantity</h6>
                    <h6 className="text-secondary col-md-1"> Price</h6>
                </div>
                <div className="row">
                    <h6 className="col-md-7">{product.name}</h6>
                    <h6 className="col-md-4">{1}</h6>
                    <h6 className="col-md-1">{product.price}</h6>
                </div>
                <div className=" mt-5 d-flex justify-content-end" onClick={handleUserOrder}><button className="btn btn-dark">Checkout</button></div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductCheckout;