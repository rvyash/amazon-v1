/* This is the palyment file */
import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../State/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import {
    CardElement,
    useStripe,
    useElements,
    Elements,
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../State/Reducer";
import Axios from "axios";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const element = useElements();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async() => {
            const response = await Axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket)}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: Elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                history.replace("/orders");
            });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : " ");
    };

    return ( <
            div className = "payment" >
            <
            div className = "payment_container" >
            <
            h1 > You have { basket.length } - items in the Order < /h1>{" "} <
            div className = "payment_section" >
            <
            div className = "payment_title" >
            <
            h2 > Delivery Address < /h2>{" "} < /
            div > { " " } <
            div className = "payment_add" >
            <
            p >
            <
            strong > Email: < /strong> {!user ? " " : user.email}{" "} < /
            p > { " " } <
            p > mera pata < /p>{" "} < /
            div > { " " } <
            /div>{" "} <
            div className = "payment_section" >
            <
            div className = "payment_title" >
            <
            h3 > Review item and Delivery < /h3>{" "} < /
            div > { " " } <
            div className = "payment_item" > { " " } {
                basket.map((item) => ( <
                    CheckoutProduct id = { item.id }
                    title = { item.title }
                    image = { item.image }
                    price = { item.price }
                    rating = { item.rating }
                    />
                ))
            } { " " } <
            /div>{" "} < /
            div > { " " } <
            div className = "payment_section" >
            <
            div className = "payment_title" >
            <
            h3 > Payment Method < /h3>{" "} < /
            div > { " " } <
            div className = "payment_detail" > { " " } { /* stripe */ } { " " } <
            form onSubmit = { handleSubmit } >
            <
            CardElement onChange = { handleChange }
            />{" "} <
            div className = "payment_price" >
            <
            CurrencyFormat renderText = {
                (value) => ( <
                    >
                    <
                    p >
                    Subtotal({ basket.length }
                        items):
                    <
                    strong > { value } < /strong>{" "} < /
                    p > { " " } <
                    />
                )
            }
            decimalScale = { 2 }
            value = { getBasketTotal(basket) }
            displayType = { "text" }
            thousandSeperator = { true }
            prefix = { "₹" }
            />{" "} <
            button disabled = { processing || disabled || succeeded } >
            <
            span > {
                processing ? < p > Processing < /p> : "Buy Now"}</span >
                <
                /button>{" "} < /
                div > { " " } { /* ERROR handle*/ } {
                    error && < div > { error } < /div>}{" "} < /
                        form > { " " } <
                        /div>{" "} < /
                        div > { " " } <
                        /div>{" "} < /
                        div >
                );
            }

            export default Payment;
