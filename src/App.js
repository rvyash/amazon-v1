import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./State/StateProvider";
import Prelogin from "./Prelogin/Prelogin";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment/Payment";

const promise = loadStripe(
    "pk_test_51HVLsILhPbyZ7pnSSIzEUg6BnaVqyYmxeRJWPqmlzM0i1CZNNRRfCNjWBviqj8lHcLIHxbls7MuVy2AnH23Uxqso00ZSVLuY2A"
);

function App() {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("user is", authUser);
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return ( <
        Router >
        <
        div className = "app" >
        <
        Switch >
        <
        Route path = "/login" >
        <
        Login / >
        <
        /Route> <
        Route path = "/checkout" >
        <
        Header / >
        <
        Checkout / >
        <
        /Route> <
        Route path = "/payment" >
        <
        Header / >
        <
        Elements stripe = { promise } >
        <
        Payment / >
        <
        /Elements>{" "} <
        /Route> <
        Route path = "/" >
        <
        Header / > { user ? < Home / > : < Prelogin / > } { " " } <
        /Route>{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /Router>
    );
}

export default App;