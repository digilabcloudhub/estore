import React from "react";
import TopMenu from "../TopMenu"
import "./_header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <>
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
              <font>eStore</font>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">

            <div className="input-group mt-3">
              <div className="input-group-prepend">
                <select className="form-control btn btn-success dropdown-toggle">
                  <option>ALL</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                </select>

              </div>

              <input type="text" className="form-control" />

              <div className="input-group-append">
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faMagnifyingGlass}/>
                  
                </button>
              </div>
            </div>

          </div>
          <div className="col-lg-3">
            <div className="header__right">
              <div className="header__right__auth">
                <a href="#">Sign-in</a>
                <a href="#">Sign-up</a>
              </div>
              <ul className="header__right__widget">
                <li><FontAwesomeIcon icon={faHeart}/> </li>
                <li><FontAwesomeIcon icon={faShoppingCart}/> </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </header>
    <TopMenu/>
  </>
)

export default Header;