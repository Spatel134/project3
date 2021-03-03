import React from "react";
// import axios from "axios";
// import { useEffect } from "react";
import Sidenav from "../../components/Sidenav/index";
import M from "materialize-css";
import "./index.css";

const Contact = () => {
  function Toast() {
    M.toast({ html: "Submitted Successfully!" });
  }
  return (
    <>
      <Sidenav title="Community Fridge" />
      <div id="hero">
        <div className="container">
          <div className="row">
            <div className="col s12 xl8">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Contact Us</span>
                  <p
                    className="left-align"
                    style={{
                      paddingLeft: "45px",
                      paddingRight: "45px",
                      paddingTop: "35px",
                    }}
                  >
                    If you have any inquiries, please to not hesitate to contact
                    us by filling out and submitting the form below.
                  </p>
                  <div className="row">
                    <div
                      className="col s12"
                      style={{
                        paddingLeft: "50px",
                        paddingRight: "50px",
                        paddingTop: "50px",
                      }}
                    >
                      <form className="col s12">
                        <div className="row">
                          <div className="center-align input-field col s12">
                            <input
                              // placeholder="Ex. John Doe"
                              id="full_name"
                              type="text"
                              className="validate"
                            />
                            <label
                              // className="center-align active"
                              htmlFor="full_name"
                            >
                              Full Name
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input
                              id="email"
                              type="text"
                              className="validate"
                            />
                            <label htmlFor="email">Email</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <textarea
                              id="textarea1"
                              className="materialize-textarea"
                            ></textarea>
                            <label htmlFor="textarea1">Textarea</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="card-action">
                  <button onClick={Toast} className="btn">
                    Submit
                  </button>
                  {/* Have to have the toast be passed up to parent page?? */}
                  {/* <a onClick={Toast} href="/">
                  Submit
                </a> */}
                  {/* <a onClick={Toast} className="btn">
                  Toast!
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
