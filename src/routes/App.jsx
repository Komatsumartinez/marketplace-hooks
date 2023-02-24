import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import CheckOut from '../containers/CheckOut';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={Home}/>               
                <Route exact path="/checkout" component={CheckOut}/>
                <Route exact path="/checkout/information" component={Information}/>
                <Route exact path="/checkout/payment" component={Payment}/>
                <Route exact path="/checkout/success" component={Success}/>
                <Route component={NotFound}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;