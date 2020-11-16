import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../State/StateProvider";
import { auth } from "../firebase";
import Prelogin from "../Prelogin/Prelogin";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut().then(alert("You have successfully Logged Out"));
        }
    };
    return ( 
       <div className = "header" >
        <Link to = "/" >
        <img className = "header_logo"
        src = "https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link> <
        div className = "header_search" >
        <
        input className = "header_search_input"
        type = "text" / >
        <
        SearchIcon class = "header_search_icon" / >
        <
        /div>{" "} <
        div className = "header_nav" >
        <
        Link to = {!user && "/login" } >
        <
        div className = "header_option"
        onClick = { handleAuthentication } >
        <
        span className = "header_optionOne" >
        Hi, {!user ? "Guest" : user.email } { " " } <
        /span>{" "} <
        span className = "header_optionTwo" > { " " } { user ? "Sign Out" : "Sign In" } { " " } <
        /span>{" "} <
        /div>{" "} <
        /Link> <
        div className = "header_option" >
        <
        span className = "header_optionOne" > { user ? "Returns" : " " } < /span>{" "} <
        span className = "header_optionTwo" > { user ? "& Order" : " " } < /span>{" "} <
        /div>{" "} <
        div className = "header_option" >
        <
        span className = "header_optionOne" > { user ? "Your" : " " } < /span>{" "} <
        span className = "header_optionTwo" > { user ? "Prime" : " " } < /span>{" "} <
        /div> <
        Link to = "/checkout" >
        <
        div className = "header_option_basket" > { " " } { user ? < ShoppingCartIcon / > : " " } { " " } <
        span className = "header_optionTwo header_basket_count" > { " " } { user ? basket.length : " " } { " " } <
        /span>{" "} <
        /div>{" "} <
        /Link>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Header;
