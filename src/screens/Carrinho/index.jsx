import "./styles.css"

import React, { useState } from "react";
import Courses from "../Courses"; 
import CourseCard from "../CourseCard"; 
import CartItems from "./CartItems";


const ShoppingCart = () => {
    return (
        <>
            <NavBar/>
            <Courses/>
            <CartItems/>
        </>
    )
}

export default Cliente;