import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    // props destructuring pass from the App.js component
    const { cartItems, onRemove, cartItemlength } = props
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Start Boostrap</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" href="#" aria-current="page">Card</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" href="#">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" href="#">Shop</NavLink>
                            </li>
                        </ul>

                        {/* Add to cart modal open */}
                        <ul className="mt-2 nav-item ">
                            {/*  Cart icon button to click to open modal to see the item add in the cart */}
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <span className="cart-area"><i className="fas fa-shopping-cart"></i><span className="cart mx-2 text-bold">Cart</span><span className="cart-no mx-2 text-white">{cartItemlength}</span></span>
                            </button>
                            <div className="modal fade right " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6>My Cart</h6>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X</button>
                                        </div>
                                        <div className="modal-body ">
                                            <div className="container ">
                                                <div className="row">
                                                    {cartItems.map((item, index) => {
                                                        /* destructuring  the items of cartItems */
                                                        const { image, type, price } = item;
                                                        return <div key={index} className="col-12 col-md-12 col-sm-12 col-lg-12  m-auto  ">
                                                            <div className="card mb-3 modal-card" style={{ "width": "437px", "height": "75px" }}>
                                                                <div className="row modal-row g-0">
                                                                    <div className="col-md-3 col-sm-3">
                                                                        <img src={image} className="img-fluid modal-image rounded-start" alt="..." />
                                                                    </div>
                                                                    <div className="col-md-5 col-sm-5">
                                                                        <div className="card-body">
                                                                            <h5 className="card-title modal-type">{type}</h5>
                                                                            <p className="card-text modal-price "><small className="text-muted">{price}</small></p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-4">
                                                                        <button className=" btn btn-danger my-3 btnremove" onClick={() => onRemove(item)} >Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar