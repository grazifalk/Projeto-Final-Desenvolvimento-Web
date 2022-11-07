import { createContext, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ clildren }) => {
    const [cart, setCart] = useState([]);

    function adicionarAoCarrinho, (url, name, price) {
        const itemObject = { url, name, price };
        setCart([...cart, itemObject]);
    }
    
    function removerDoCarrinho,(clickedItemIndex) {
        const filteredCart = cart.filter{
            (cartItem) => cart.idexOf(cartItem) !== clicledItemIndex
        };
        setCart(filteredCart);
    }
    
    function limparCarrinho() {
        setCart([]);
    }

    return {
        <CartContext.Provide 
	value={{ cart, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho}}
	>
        {clildren}
        </CartContext.Provide>
    }
}

