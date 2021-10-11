import React, { Suspense } from 'react';
import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Common.css';
import Loading from './Component/CommonComponent/Loading/Loading.js';
import PrivateRoute from './Component/Login/PrivateRoute';
const Login = React.lazy(() => import('./Component/Login/Login.js'));
// const Admin = React.lazy(() => import('./Component/AdminPage/Admin/Admin'));
const AddProduct = React.lazy(() => import('./Component/AdminPage/AddProduct/AddProduct'));
const Home = React.lazy(() => import('./Component/Home/Home.js'));
const UserOrderedProducts = React.lazy(() => import('./Component/UserOrderedProducts/UserOrderedProducts'));
const ProductCheckout = React.lazy(() => import('./Component/ProductCheckout/ProductCheckout'));
const NotFound = React.lazy(() => import('./Component/CommonComponent/NotFound/NotFound'));
const ManageProducts = React.lazy(() => import('./Component/AdminPage/ManageProducts/ManageProducts'));
export const UserContext = createContext()
function App() {
  const [userDataInfo, setUserDataInfo] = useState({
    isSignedIn: false,
    email: "",
    isAdmin: false,
  })
  return (
    <Suspense fallback={<Loading/>}>
      <UserContext.Provider value={[userDataInfo, setUserDataInfo]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/manageProducts">
              <ManageProducts/>
            </Route>
            <Route path="/addProduct">
              <AddProduct/>
            </Route>
            <PrivateRoute path="/userOrder">
              <UserOrderedProducts />
            </PrivateRoute>
            <PrivateRoute path="/productCheckout/:id">
              <ProductCheckout />
            </PrivateRoute>
            {/* <Route path="/admin">
              <Admin/>
            </Route> */}
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider >
    </Suspense>
  );
}

export default App;