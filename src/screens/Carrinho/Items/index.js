import React, {useContext} from "react";
import { CartContext } from "../CartContext";

const Items = ({name, price, itemIndex}) => {
    const {handleRemoveItemFromCart} = useContext(CartContext);

    return(
        <li> 
            <h2 className="list-title">{name}</h2> 
            <span className="list-price">{price}</span>      
            <button 
            className="remove-btn" 
            onClick={() => handleRemoveItemFromCart(itemIndex)}>
            Remover
            </button> 
        </li>
    );
};

export default Items;