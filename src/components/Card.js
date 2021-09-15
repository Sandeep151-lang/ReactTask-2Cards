import React from 'react';
import ReactStars from "react-rating-stars-component";





const Card = (props) => {
    // destructuring the props pass from App.js component
    const { products, onAdd, cartItems } = props

    return (
        <section className="my-5 container">

            <div className="row">
                {
                    products.map((product, key) => {

                        //destructuring the products 
                        const { image, type, price } = product;
                        return (
                            <div className=" col-xs-12  col-11 col-sm-10 col-md-10 col-lg-3 col-xl-3 m-auto my-5 cards offset-sm-2 offset-md-2" key={key}>
                                <div className="card" style={{ width: "15rem" }}>
                                    <img src={image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{type}</h5>
                                        <p className="card-text text-center">{price}</p>
                                        <ReactStars classNames="m-auto" count={product.starRating} size={24} color="#ffd700" />
                                        <button className={"btn my-4 mx-5 btn-success " + (cartItems.find((x) => x.id === product.id) ? "disabled" : "btn-success")} onClick={() => onAdd(product)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Card
