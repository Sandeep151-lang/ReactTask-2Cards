import React from 'react';

export default function Navsection(props) {
    const { cartItems, onRemove, cartItemlength } = props
    return (
        <>
            <div className="navbars">
                <nav className="navbar navbar-light bg-light">
                    <div className="btn-group dropstart">
                        <p className="font-bold">Start Bootstrap</p>
                    </div>
                    <div className="btn-group dropstart">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="cart-area"><i className="fas fa-shopping-cart"></i><span className="cart mx-2 text-bold">Cart</span><span className="cart-no mx-2 text-white">{cartItemlength}</span></span>
                        </button>
                        <ul className="dropdown-menu">
                            {cartItems.map((item, key) => {
                                const { image, type, price } = item;
                                return (
                                    <div className=" container item" key={key}>
                                        <div>
                                            <img src={image} className="card-img-top card-img" alt="..." style={{ "width": "50px" }} />
                                        </div>
                                        <div className="container">
                                            <h6 className="card-type">{type}</h6>
                                        </div>
                                        <h6 className=" card-price">{price}</h6>
                                        <div>
                                            <button className="btn btn-danger card-btn ml-3" onClick={() => onRemove(item)}><i className="fas fa-trash"></i></button>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}