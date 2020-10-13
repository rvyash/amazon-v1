import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../State/StateProvider";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => alert(error.message));
    };

    return ( <
        div >
        <
        div className = "login" >
        <
        Link to = "/" >
        <
        img className = "login_logo"
        src = "data:image/png;base64,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" /
        >
        <
        /Link>{" "} <
        div className = "login_container" >
        <
        h2 > Already a user ? < /h2>{" "} <
        form >
        <
        h5 > E - mail < /h5>{" "} <
        input type = "text"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        />{" "} <
        h5 > Password < /h5>{" "} <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        />{" "} <
        i >
        <
        small className = "subtotal_gift" >
        <
        input type = "checkbox" / >
        Remember me { " " } <
        /small>{" "} <
        /i>{" "} <
        button onClick = { signIn }
        className = "login_signin_button"
        type = "submit" >
        Sign - in
        <
        /button>{" "} <
        /form>{" "} <
        p >
        By signing - in you doesn 't agree to the our FAKE Condition of Use &
        Sale.Please see our Privacy Notice, our Cookies Notice and our Internet Based Ads.NOTE : This is a demo model
        for the shopping application by Yash { " " } <
        /p>{" "} <
        button onClick = { register }
        className = "login_register_button" >
        Create an Account { " " } <
        /button>{" "} <
        button className = "google_login_button" >
        Sign - up with Google { " " } <
        /button>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Login;