import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const CourseCard = ({ img, title, price}) => {
    const {handleAddItemToCart} = useContext(CartContext)
 
    return(
        <div className = "card">
            <img className="card-logo" src=(img) alt="" />
            <h1 className="card-title">
                {title} R$ {price}
            </h1>
            <button onClick={() => handleAddItemToCart(img,title,price)}>
                Adicionar
            </button>
        </div>
    );
};

export default CourseCard;