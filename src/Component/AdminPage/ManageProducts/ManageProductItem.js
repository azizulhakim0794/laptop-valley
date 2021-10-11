import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../../axios';
import React from 'react';

const ManageProductItem = ({data}) => {
    const handleProductDelete = (data) => {
        document.getElementById(`order${data}`).style.display = 'none'
        console.log(data)
        axios.delete('/deleteProduct', {
            headers: {
                id: data
            }
        })
            .then(res => {
                console.log(res.data)
            })
    }
    return (
        <div className="product-list" id={`order${data._id}`}>
            <div className="d-flex justify-content-between align-items-center"><h5>{data.name}</h5><p className="d-flex align-items-center p-2 iconBtn"onClick={()=>handleProductDelete(data._id)}><FontAwesomeIcon icon={faTrashAlt} /></p></div>
        </div>
    );
};

export default ManageProductItem;