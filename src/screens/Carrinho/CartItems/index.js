import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Item from "../Item";

const CartItems = () => {
    const{cart} = useContext(CartContext)

    return(
        <footer>
            <ul> 
                {cart.map((cartItem,index) => (
                    <Item 
                    key={index} 
                    itemIndex={index}
                    name={cartItem.name} 
                    price={cartItem.price}
                    />
                ))}
            </ul>
        </footer>
    );
};

export default CartItems;