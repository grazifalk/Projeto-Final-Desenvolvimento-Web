import { createContext, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ clildren }) => {
    const [cart, setCart] = useState([]);

    
    function handleAddItemToCart, (url, name, price) {
        const itemObject = { url, name, price };
        setCart([...cart, itemObject]);
    }
    
    function handleRemoveItemFromCart,(clickedItemIndex) {
        const filteredCart = cart.filter(
            (cartItem) => cart.idexOf(cartItem) !== clicledItemIndex
        );
        setCart(filteredCart);
    }
    
    function clearCart() {
        setCart([]);
    }

    return(
        <CartContext.Provide 
	value={{ cart, handleAddItemToCart, handleRemoveItemFromCart, clearCart}}
	>
        {clildren}
        </CartContext.Provide>
    );
};

