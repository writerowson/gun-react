import React from 'react';
import './Card.css'
import { FaShoppingCart } from "react-icons/fa"

const Card = ({ data }) => {
    // const {name}=props.data 
    const { name, img, bullet, price, capacity, action } = data

    const handleAddTocart = () => {
        console.log(handleAddTocart)
    }
    return (
        <div className='card'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <h1>{name}</h1>
            <p>Bullet Type : {bullet}</p>
            <p>Capacity : {capacity}</p>
            <p>Action : {action}</p>
            <div className='add-to-cart'>
                <button onClick={handleAddTocart} className='icon'><FaShoppingCart></FaShoppingCart> </button>
                <h1>${price}</h1>
            </div>
        </div>
    );
};

export default Card;