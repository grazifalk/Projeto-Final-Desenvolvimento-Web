import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const NavBar = () => {
    const {cart, clearCart} = useContext(CartContext)

    const totalPrice = cart.reduce((acc, current)=> acc + current.price, 0)

    return(
        <header>
            <nav>
                <div className="nav-bar-actions">
                    <div className="nav-bar-total">
                        <span class="nav-bar-total-quantity">
                            {cart.lenght} {cart.lenght == 1 ? 'curso' : 'cursos'}
                        </span>
                        <span class="nav-bar-total-price">
                            R$ {totalPrice.toFixed(2)}
                        </span>
                    </div>

                    <button className="clear-btn" onClick={() => clearCart()}>
                        Limpar
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;