import React from 'react';

const UserOrderItem = ({data}) => {
    return (
        <div className="row m-3">
                    <h6 className="col-md-7">{data.productName}</h6>
                    <h6 className="col-md-4">{1}</h6>
                    <h6 className="col-md-1">{data.productPrice}</h6>
                </div>
    );
};

export default UserOrderItem;