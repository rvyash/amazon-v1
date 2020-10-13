import React from "react";
import "./CheckoutProduct.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../State/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeBasket = () => {
        //Remove items from basket
        dispatch({
            type: "REMOVE_BASKET",
            id: id,
        });
    };

    return ( <
        div className = "checkout_product" >
        <
        img className = "checkout_product_image"
        src = { image }
        /> <
        div className = "checkout_product_info" >
        <
        p className = "checkout_product_title" > { title } < /p> <
        p className = "checkout_product_price" >
        <
        small className = "inr_logo" > ₹ < /small> <
        strong > { price } < /strong> <
        /p> <
        div className = "checkout_product_rating" > {
            Array(rating)
            .fill()
            .map((_, i) => ( <
                p >
                <
                StarRateIcon / >
                <
                /p>
            ))
        } <
        /div> <
        div >
        <
        button onClick = { removeBasket }
        className = "button" >
        Remove <
        /button> <
        /div> <
        /div> <
        /div>
    );
}

export default CheckoutProduct;