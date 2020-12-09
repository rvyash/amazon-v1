import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../../State/StateProvider";

function Product({ title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        /* dispatch the items into the datalayer*/
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return ( 
        <div className = "product" >
        <div className = "product_info" >
        <p> { title } < /p> 
        <p className = "product_price" >
        <
        small className = "money" > ₹ < /small> <strong> {price} </strong >
        <
        /p> <
        div className = "product_rating" > {
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
        /div> <
        img src = { image }
        alt = "" / >
        <
        button onClick = { addToBasket } > Add to cart < /button>{" "} <
        /div>
    );
}

export default Product;
