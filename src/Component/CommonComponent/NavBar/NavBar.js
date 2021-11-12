import axios from '../../../axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const NavBar = () => {
  const [userDataInfo] = useContext(UserContext)
  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    axios.get('/isAdmin', {
      headers: {
        email: userDataInfo.email
      }
    })
      .then(res => setAdmin(res))
  }, [userDataInfo.email])
  console.log(admin)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <header className="navbar-brand">Laptop Valley</header>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/userOrder">Orders</Link>
            </li>
            {!userDataInfo.isSignedIn ? <li className="nav-item ms-xl-3">
              <Link className="btn btn-dark" to="/login">Login</Link>
            </li> : ""}
           {userDataInfo.email? admin.data ? <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/manageProducts">Manage Products</Link>
            </li> : '' : ""}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;