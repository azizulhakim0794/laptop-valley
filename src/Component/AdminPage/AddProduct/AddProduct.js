import { faHome, faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../../axios';
import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import '../AdminPage.css'
const AddProduct = () => {
    const history = useHistory()
    const [productName,setProductName] =useState('')
    const [productImg,setProductImg] =useState('')
    const [productPrice,setProductPrice] =useState('')
    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        if(e.target.name === "productName"){
            setProductName(e.target.value)
        }
        if(e.target.name === "productImgLink"){
            setProductImg(e.target.value)
        }
        if(e.target.name === "productPrice"){
            setProductPrice(e.target.value)
        }
        
    }
    const handleSubmit = async(e) =>{
        if(productName.length > 1 && productImg.length > 1 && productPrice.length > 0){
            e.preventDefault()
           await axios.post('/addProduct',{
                name:productName,
                img:productImg,
                price:productPrice
            })
            .then(res => {
                if(res.status === 201) history.push('/')
                console.log(res.status)
            })
        }
        
    }
    return (
        <div className="w-100 row p-0 manageChart">
            <div className="col-xl-3 col-md-5 col-sm-5 col-5 manageOption">
                <p className="mt-4 ms-4 h4-md h5">LAPTOP VALLEY</p>
                <div className="manage_Option_item mt-4" onClick={() => history.push('/manageProducts')}><p className="ms-3 mb-inherit"><FontAwesomeIcon className="me-2" icon={faThLarge} /><span>Manage Products</span></p></div>
                <div className="manage_Option_item mt-4" onClick={() => history.push('/addProduct')}><p className="ms-3 mb-inherit"><FontAwesomeIcon className="me-2" icon={faPlus} /><span>Add Products</span></p></div>
                <div className="manage_Option_item"><p className="ms-3 mb-inherit"><FontAwesomeIcon className="me-2" icon={faPen} /><span>Edit Products</span></p></div>
                <div className="manage_Option_item" onClick={() => history.push('/home')}><p className="ms-3 mb-inherit"><FontAwesomeIcon className="me-2" icon={faHome} /><span>Home</span></p></div>
            </div>
            <div className="col-xl-9 col-md-7 col-sm-7 col-7 manageProducts overflow-auto">
                <div className="bg-light sticky-top px-4 py-4"><h5 className="">Manage Products</h5></div>
                <form className="px-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Product Name</label>
                        <input onChange={handleChange}  className="form-control" name="productName" required/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Product Image Link</label>
                        <input  onChange={handleChange} className="form-control" name="productImgLink" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Product Price</label>
                        <input type="number" className="form-control" onChange={handleChange} name="productPrice" required/>
                    </div>
                    <div className="text-center my-4"><input type="submit" className="btn btn-dark"/></div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;