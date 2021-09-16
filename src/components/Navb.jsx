
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardText, Col, Card, Row } from 'reactstrap';
import { NavLink } from "react-router-dom";



const Navb = (props) => {
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
            <section className="navs">
                <nav className="navbar navbar-light bg-light d-flex justify-conternt-end">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand">Start Boostrap</NavLink>
                    </div>
                    <div>
                        <Button color="white" className="ml-auto" onClick={toggle}>{buttonLabel}<span className="cart-area"><i className="fas fa-shopping-cart"></i><span className="cart mx-2 text-bold">Cart</span><span className="cart-no mx-2 text-white">{cartItemlength}</span></span></Button>
                        <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
                            <ModalHeader>My Cart</ModalHeader>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle}>X</Button>
                            </ModalFooter>
                            <ModalBody>
                                <div className="container ">
                                    <Row>
                                        {cartItems.map((item, key) => {
                                            /* destructuring  the items of cartItems */
                                            const { image, type, price } = item;

                                            return (
                                                <Col sm="12" key={key} className="py-3 " >
                                                    <Card body>
                                                        <img src={image} className="card-img-top" alt="..." />
                                                        <CardText className="text-center">{type}</CardText>
                                                        <CardText className="text-center">{price}</CardText>

                                                        <Button className="btn my-4 mx-5 btn-danger" onClick={() => onRemove(item)}>Remove</Button>
                                                    </Card>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navb;