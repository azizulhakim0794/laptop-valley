import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from 'react-router';
const Products = ({ data }) => {
    const history = useHistory()
    const handleProductCheckout = ()=>{
        history.push('/productCheckout/'+data._id)
    }
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="card m-2" >
                <LazyLoadImage
                    alt={data.name}
                    src={data.img} />
                <div className="card-body">
                    <h5 className="card-title laptop-title">{data.name}</h5>
                    <div className="d-flex justify-content-between">
                        <h4>$ {data.price}</h4>
                        <button className="btn btn btn-dark" onClick={()=>handleProductCheckout(data._id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;