import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "../wo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import "./navbar.scss";
import Sidenav from "./sidenav";
import "./navbar.scss";
export default class Navbar extends Component {
  render() {




    return (
      <div className="header">
        <NavWrapper className="navbar navbar-expand-expand-sm navbar-dark px-sm-5">
          <Link to="/" className="nav-link">
            {/* <img
              src={logo}
              alt="store"
              style={{ width: "50px", fill: "white", height: "50px" }}
            /> */}
          </Link>

          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i
                  style={{ paddingRight: "5px" }}
                  className="fas fa-shopping-cart"
                ></i>
              </span>
              Cart
            </ButtonContainer>
          </Link>
        </NavWrapper>

        <nav className="nav">
          <ul className="categories">
            <li>Clothes</li>
            <li>Shoes</li>
            <li>Bags</li>
            <li>Jewelleries</li>
            
            <li>Cosmetics</li>

            <li>Hair/Wig</li>
            <li>Lingeries</li>
            <li>Accesories</li>
          </ul>
        </nav>

        <Sidenav />
      </div>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  padding: 1em 0em;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .ml-auto {
  }
`;
