import axios from '../../axios';
import React, { useContext, useEffect, useState } from 'react';
import './UserOrderedProducts.css'
import { UserContext } from '../../App';
import UserOrderItem from './UserOrderItem';
const NavBar = React.lazy(() => import('../CommonComponent/NavBar/NavBar'));
const Footer = React.lazy(() => import('../CommonComponent/Footer/Footer'));
const UserOrderedProducts = () => {
    const [userDataInfo]  = useContext(UserContext)
    const [userData,setUserData] = useState([])
    useEffect(()=>{
        axios.get('/userOrder',{
            headers:{
                email:userDataInfo.email
            }
        })
        .then(res=>setUserData(res.data))
    },[userDataInfo.email])
    return (
        <div>
            <NavBar/>
            <div className="container">
            <div className="container">
                 <h4 className="text-center">Your Order Summery</h4>
                <div className="row border-bottom mt-5">
                    <h6 className="text-secondary col-md-7"> Description</h6>
                    <h6 className="text-secondary col-md-4"> Quantity</h6>
                    <h6 className="text-secondary col-md-1"> Price</h6>
                </div>
                {
                    userData.map(data=> <UserOrderItem data={data} key={data._id}/>)
                }
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default UserOrderedProducts;