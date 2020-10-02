import React from "react";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link, BrowserRouter } from "react-router-dom";
import { Button } from "./Button.js";
import "./Pricing.css";
function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#242424", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <BrowserRouter>
                <Link className="pricing__container-card" to="/sign-up">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <FaFire />
                    </div>

                    <h3>Starter</h3>
                    <h4>84$</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>100 transaction</li>
                      <li>2% cash back</li>
                      <li>$10.000 limit</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                      Choose Plan
                    </Button>
                  </div>
                </Link>
              </BrowserRouter>
              <BrowserRouter>
                <Link className="pricing__container-card" to="/sign-up">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <BsXDiamondFill />
                    </div>

                    <h3>Diamond</h3>
                    <h4>10000$</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>100 transaction</li>
                      <li>2.2% cash back</li>
                      <li>unlimited speding</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      Choose Plan
                    </Button>
                  </div>
                </Link>
              </BrowserRouter>
              <BrowserRouter>
                <Link className="pricing__container-card" to="/sign-up">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <GiCrystalize />
                    </div>

                    <h3>Gold</h3>
                    <h4>8444$</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>100 transaction</li>
                      <li>2.2% cash back</li>
                      <li>$100.000 limit</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                      Choose Plan
                    </Button>
                  </div>
                </Link>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
