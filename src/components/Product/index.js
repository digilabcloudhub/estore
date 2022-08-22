import React from 'react';
import "./_product.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const products = [
    require("../../assets/img/shop/shop-1.jpg"),
    require("../../assets/img/shop/shop-2.jpg"),
    require("../../assets/img/shop/shop-3.jpg"),
    require("../../assets/img/shop/shop-4.jpg"),
    require("../../assets/img/shop/shop-5.jpg"),
]

const Product = () => (
    <div className="row">
        {products.map((item, index) => (


            <div className="col-lg-3 col-md-6">
                <div className="product__item">
                    <div className="product__item__pic">
                        <img className="product__item__pic" src={item} />
                        <ul className="product__hover">
                            <li>
                                <a href={item}>
                                    <span >
                                    <FontAwesomeIcon icon={faArrowsAlt}  />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>
                            <a href="#">Furry Hooded</a>
                        </h6>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            
                        </div>
                        <div className="product__price">$590.0</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)

export default Product;