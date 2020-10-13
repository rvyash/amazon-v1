import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../State/StateProvider";
import { getBasketTotal } from "../State/Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    return ( <
        div className = "subtotal" >
        <
        CurrencyFormat renderText = {
            (value) => ( <
                >
                <
                p >
                Subtotal({ basket.length }
                    items):
                <
                strong > { value } < /strong> <
                /p> <
                small className = "subtotal_gift" >
                <
                input type = "checkbox" / >
                This will be a gift < i > Learn more < /i> <
                /small> <
                />
            )
        }
        decimalScale = { 2 }
        value = { getBasketTotal(basket) }
        displayType = { "text" }
        thousandSeperator = { true }
        prefix = { "₹" }
        /> <
        button onClick = {
            (e) => history.push("/payment") } >
        Proceed to Checkout <
        /button> <
        /div>
    );
}

export default Subtotal;