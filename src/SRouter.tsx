import React from 'react';
import {Route, Switch} from 'react-router';
import {Cart, Contact, Home, Product} from "./components";


const SRouter: React.FC = () => {
    return (
        <Switch>
            <Route key="home" path={"/"} exact component={Home}/>
            <Route key="contact" path="/contact" exact component={Contact}/>
            <Route key="cart" path="/cart" exact component={Cart}/>
            <Route key="product" path="/products/:slug" exact component={Product}/>
        </Switch>
    )
}

export default SRouter;
