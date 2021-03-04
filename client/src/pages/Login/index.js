import React, { useState, useContext } from "react";
import AdminContext from "../../Context/AdminContext"
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { admin, setAdmin } = useContext(AdminContext)
    const history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/authentication/login", { email, password })
            .then((response) => {

                jwt.verify(
                    response.data.token,
                    process.env.REACT_APP_SECRET,
                    (err, decoded) => {
                        if (err) {
                            console.log(err);
                        } else {

                           setAdmin({ _id: decoded._id, email: response.data.email });
                            sessionStorage.setItem("id", decoded._id);
                            sessionStorage.setItem("email", response.data.email);
                            history.push(`/admin/${decoded._id}`);
                        }
                    }
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1 className="center-align">Welcome! Please login to continue</h1>
                </div>
            </div>
            <div className="row">
                <form className="col s12" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col s3"></div>
                        <div className="input-field col s6">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <label htmlFor="title">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s3"></div>
                        <div className="input-field col s6">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <label htmlFor="title">Password</label>
                        </div>
                    </div>
                    <div className="row center-align">
                        <button className="waves-effect waves-light btn">Sign in!</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;