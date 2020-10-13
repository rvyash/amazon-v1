import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../State/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

import Login from "../Login/Login";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return ( <
        div className = "checkout" > {!user ? ( <
                Login / >
            ) : ( <
                div className = "checkout_left" >
                <
                img className = "checkout_ad"
                src = "https://images-eu.ssl-images-amazon.com/images/G/31/aShop/Desktop_IN_1x_01.gif"
                alt = "" /
                >

                <
                div >
                <
                h2 className = "checkout_title" > Your Cart items < /h2> { /* CheckoutProduct*/ } {
                    basket.map((item) => ( <
                        CheckoutProduct title = { item.title }
                        image = { item.image }
                        price = { item.price }
                        rating = { item.rating }
                        />
                    ))
                } <
                /div> <
                /div>
            )
        }

        <
        div className = "checkout_right" >
        <
        img className = "checkout_ad_right"
        src = "https://entrackr.com/wp-content/uploads/2018/05/Amazon_smart_home_2.gif"
        alt = "" /
        > {!user ? < Login / > : < Subtotal / > } <
        /div> <
        div className = "coro" >
        <
        img src = "https://pic.pikbest.com/01/73/59/30SpIkbEsTJQK.jpg-0.jpg!bw700" / >
        <
        img className = "coro1"
        src = "https://fssai.gov.in/upload/knowledge_hub/1870795b98d132e96a6FoodHygiene.jpg" /
        >
        <
        /div> <
        /div>
    );
}

export default Checkout;