
import { faHome, faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../../axios';
import React, { useEffect, useState } from 'react';
import '../AdminPage.css'
import ManageProductItem from './ManageProductItem';
import {useHistory } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
const ManageProducts = () => {
    const [allData, setAllData] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get('/allProducts')
            .then(res => setAllData(res.data))
    }, [])
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
                <LazyLoad>
                    {
                        allData.length ? allData.map(data => <ManageProductItem data={data} key={data._id} /> ): <h4 className="d-flex justify-content-center">Loading..</h4>
                    }
                </LazyLoad>

            </div>
        </div>
    );
};

export default ManageProducts;