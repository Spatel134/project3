import React from "react";
const Header = (props) => {
    return (
        <nav className="nav-wrapper">

            <div className="row">
                <div className="col s12 center-align">
                    <a href="/" className="brand-logo center">
                        {props.title}
                    </a>
                </div>
            </div>


        </nav>
    )
}
export default Header;