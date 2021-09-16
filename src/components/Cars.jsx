import React from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import ReactStars from "react-rating-stars-component";


const Cars = (props) => {
    const { products, onAdd, cartItems } = props
    return (
        <div className="container-fluid">
            <Row>
                {
                    products.map((product, key) => {
                        //destructuring the products 
                        const { image, type, price } = product;
                        return (
                            <Col sm="3" key={key} className="py-3 ">
                                <Card body>
                                    <img src={image} className="card-img-top" alt="..." />
                                    <CardText className="text-center">{type}</CardText>
                                    <CardText className="text-center">{price}</CardText>
                                    <ReactStars classNames="m-auto" count={product.starRating} size={24} color="#ffd700" />
                                    <Button className={"btn my-4 mx-5 btn-success " + (cartItems.find((x) => x.id === product.id) ? "disabled" : "btn-success")} onClick={() => onAdd(product)}>Add to Cart</Button>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>

    );
};

export default Cars;