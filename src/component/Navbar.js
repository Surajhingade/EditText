import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  //  below three are useState
  const [red, setRed] = useState(
    (document.body.style.backgroundColor = "light")
  );

  const [blue, setBlue] = useState(
    (document.body.style.backgroundColor = "light")
  );

  const [green, setGreen] = useState(
    (document.body.style.backgroundColor = "light")
  );

  //  bellow are change color on click the radio button
  const redTheam = () => {
    setRed((document.body.style.backgroundColor = "#dcbbbb"));
    props.showAlert("Red Theam is activited", "success ");
  };

  const blueTheam = () => {
    setBlue((document.body.style.backgroundColor = "#37376e"));
    props.showAlert("Blue Theam is activited", "success ");
  };

  const greenTheam = () => {
    setGreen((document.body.style.backgroundColor = "#4ed04e"));
    props.showAlert("Green Theam is activited", "success ");
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/*  multiple theam color chooser using radio button */}

            <div className="form-check mx-2 my-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                onClick={redTheam}
                 
              />
              <label className="form-check-label" htmlFor= "exampleRadios1">
                Red
              </label>
            </div>
            <div className="form-check mx-2 my-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                onClick={blueTheam}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                blue
              </label>
            </div>
            <div className="form-check mx-2 my-2">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                onClick={greenTheam}
                 
              />
              <label className="form-check-label" htmlFor="exampleRadios3">
                green
              </label>
            </div>

            {/* // Toggle button logic for active dark or light mode  */}
            {/* This props send from app.js and its function write in app .js above part */}
            <div
              className={`form-check mt-2 form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label text-light"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable light Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
