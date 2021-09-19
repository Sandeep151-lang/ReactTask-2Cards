import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Navsection(props) {
    const { cartItems, onRemove, cartItemlength } = props
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    return (
        <>
            <div className="navbars">
                <nav className="navbar navbar-light bg-light">
                    <div className="btn-group dropstart">
                        <p className="font-bold">Start Bootstrap</p>
                    </div>
                    <div className="btn-group dropstart">
                        <Button color="white" className="ml-auto" onClick={toggle}>{buttonLabel}<span className="cart-area"><i className="fas fa-shopping-cart"></i><span className="cart mx-2 text-bold">Cart</span><span className="cart-no mx-2 text-white">{cartItemlength}</span></span></Button>
                        <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
                            <ModalHeader>My Cart</ModalHeader>
                            <ModalBody>
                                <div className="container ">
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
                                                    <button className="btn btn-danger card-btn mb-2 ml-3" onClick={() => onRemove(item)}><i className="fas fa-trash"></i></button>
                                                </div>
                                                <hr />
                                            </div>
                                        )
                                    })}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </nav>
            </div>
        </>
    );
}